import * as React from 'react';
import { JSONSchema6, JSONSchema6Definition, JSONSchema6TypeName } from 'json-schema';
import { Formik } from 'formik';
import { Heading } from '../../atoms/Typography';
import { EHeadingType } from '../../atoms/Typography/Heading';
import Text, { ETextType } from '../../atoms/Typography/Text';
import FormFieldText from '../../atoms/FormField/Text';
import FormFieldNumber from '../../atoms/FormField/Number';

// FIXME: handle enums
type BaseSchemaDataType<T extends JSONSchema6, A> =
  | (T['type'] extends 'string'
  ? string // NonNullable<T["enum"]>[number]
  : T['type'] extends 'number'
    ? number
    : T['type'] extends 'integer'
      ? number
      : T['type'] extends 'boolean'
        ? boolean
        : T['type'] extends 'object'
          ? {
            [P in keyof T['properties']]: P extends (NonNullable<T['required']>[number])
              ? NonNullable<SchemaDataType<T['properties'][P]>>
              : SchemaDataType<T['properties'][P]>
          }
          : T['type'] extends 'array'
            ? Array<NonNullable<A>>
            : T['type'] extends 'null' ? null : T['type'] extends 'any' ? any : unknown)
  | null;

type InferredItemsSchemaDataType<T extends JSONSchema6> = T['items'] extends JSONSchema6
  ? BaseSchemaDataType<T, BaseSchemaDataType<T['items'], T['items']['items']>>
  : BaseSchemaDataType<T, unknown>;
// FIXME: handle deeply nested array item types

type SchemaDataType<T extends JSONSchema6> = InferredItemsSchemaDataType<T>;

interface IFormViewModel<Schema> {
  schema: Schema;

  formData?: SchemaDataType<Schema>;

  style?: React.CSSProperties;
  className?: string;
}

interface IFormActions {

}

type FormProps<Schema> = IFormViewModel<Schema> & IFormActions;

const Form = <Schema extends JSONSchema6> (props: FormProps<Schema>): React.ReactElement<any> | null => {
  return (
      <Formik<SchemaDataType<Schema>>
        initialValues={props.formData || {} as any}
        onSubmit={(values, actions) => {

        }}
        >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) =>
          <form style={props.style} className={props.className} onSubmit={handleSubmit}>
            <FormComponent schema={props.schema}/>
          </form>
        }
      </Formik>
  );
};

const FormComponent: React.FC<{ schema: JSONSchema6Definition }> = props => {
  const schema = props.schema as JSONSchema6; // handle if boolean

  if (Array.isArray(schema.type)) {
    return <div/>;
  } else {
    switch(schema.type as JSONSchema6TypeName) {
      case 'object':
        return <div>
          {schema.title && <Heading type={EHeadingType.H4}>{schema.title}</Heading>}
          {schema.description && <Text type={ETextType.Label}>{schema.description}</Text>}
          {schema.properties && Object.keys(schema.properties).map(propertyName => {
            return <FormComponent key={propertyName} schema={schema.properties![propertyName]}/>;
          })}
        </div>;
      case 'string':
        return <FormFieldText value={null} placeholder={schema.title} />;
      case 'number':
        return <FormFieldNumber value={null} placeholder={schema.title} />;
      case 'integer':
        return <FormFieldNumber value={null} placeholder={schema.title} />;
      case 'boolean':
      case 'array':
      case 'null':
      case 'any':
      default:
        return <div/>;
    }
  }
};

export default Form;