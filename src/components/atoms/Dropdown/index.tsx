import * as React from "react";
import Downshift from "downshift";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { TextField, Paper, MenuItem } from "@material-ui/core";
import styles from "./styles";

const renderInput: React.SFC<any> = inputProps => {
  const { InputProps, ref, classes, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        classes: {
          input: classes.bootstrapInput,
          root: classes.bootstrapRoot
        },
        disableUnderline: true,
        inputRef: ref,
        ...InputProps
      }}
      InputLabelProps={{
        className: classes.bootstrapFormLabel,
        shrink: true
      }}
      {...other}
    />
  );
};

interface ISuggestionViewModel {
  highlightedIndex: number | null;
  index: number;
  itemProps: object;
  selectedItem: string;
  suggestion: {
    label: string;
  };
}

type SuggestionProps = ISuggestionViewModel;

const renderSuggestion: React.SFC<SuggestionProps> = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
};

interface IIntegrationDownshiftViewModel extends WithStyles<typeof styles> {
  placeholder?: string;
}

interface IIntegrationDownshiftActions {
  getSuggestions: (inputValue: string | null) => Array<{ label: string }>;
}

type IntegrationDownshiftProps = IIntegrationDownshiftViewModel &
  IIntegrationDownshiftActions;

const IntegrationDownshift: React.SFC<IntegrationDownshiftProps> = props => {
  const { classes, getSuggestions } = props;

  return (
    <div>
      <Downshift>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex
        }) => (
          <div>
            {renderInput({
              classes,
              fullWidth: true,
              InputProps: getInputProps({
                id: "integration-downshift-simple",
                placeholder: props.placeholder
              })
            })}
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue).map((suggestion, index) =>
                  renderSuggestion({
                    highlightedIndex,
                    index,
                    itemProps: getItemProps({
                      item: suggestion.label
                    }),
                    selectedItem,
                    suggestion
                  })
                )}
              </Paper>
            ) : null}
          </div>
        )}
      </Downshift>
    </div>
  );
};

export default withStyles(styles)(IntegrationDownshift);
