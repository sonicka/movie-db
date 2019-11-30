import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../constants";

/** Props expected by useStyles hook */
interface ISearchStylesProps {
  marginTop: string;
}

/** Styles for Search component */
export const useStyles = makeStyles({
  searchBar: (props: ISearchStylesProps) => ({
    margin: "0 auto",
    width: "80%",
    marginTop: props.marginTop,
    backgroundColor: "black"
  }),
  carouselWrapper: {
    paddingTop: "100px"
  },
  focused: {},
  searchRoot: {
    borderBottom: "2px solid white",
    borderRadius: 0,
    "&:hover": {
      borderBottom: `2px solid ${primary}` // todo make on focus not on hover
    }
  },
  searchInput: {
    color: "white"
  }
});
