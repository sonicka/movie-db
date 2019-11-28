import { makeStyles } from "@material-ui/core/styles";

interface ISearchStylesProps {
  marginTop: string;
}

export const useStyles = makeStyles({
  searchBar: (props: ISearchStylesProps) => ({
    margin: "0 auto",
    width: "80%",
    marginTop: props.marginTop
  }),
  carouselWrapper: {
    paddingTop: "100px"
  }
});
