import { makeStyles } from "@material-ui/core/styles";

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
  sectionWrapper: {
    paddingTop: "100px",
    color: "white"
  },
  searchRoot: {
    borderBottom: "2px solid white",
    borderRadius: 0
  },
  searchInput: {
    color: "white"
  }
});
