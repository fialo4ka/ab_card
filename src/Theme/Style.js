import { StyleSheet} from 'react-native';
import * as variables from './CommonColor';


export const styles = StyleSheet.create({
  toTranslateText: {
    color: variables.whiteColor(),
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
  },
  greenContaner: {
    flex: 1,
    backgroundColor: variables.mainOkColor(),
  },
  container: {
    marginTop: 20,
    flexDirection: "column",
    flex: 1,
  },
  roundPart: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: variables.whiteColor(),
    flexDirection: "row",
  },
  okButton: {
    backgroundColor: variables.mainNotColor(),
    width: "50%",
  },
  saveButton: {
    backgroundColor: variables.mainOkColor(),
    width: "50%",
  },
  level: {
    width: "33%",
    paddingRight: 20,
    paddingTop: 20,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 20,
    color: variables.mainNotColor(),
  },
  midlPoint:{
    borderColor: variables.mainNotColor(),
    borderWidth: 1,
    height: "100%",
    margin: 10,
  },
});
