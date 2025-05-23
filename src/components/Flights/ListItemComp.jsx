import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ListItemComp = ({ img, imgLink, primary, secondary }) => {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem>
        {img === true && (
          <ListItemAvatar>
            <Avatar>
              <img
                src={imgLink}
                alt="Flights"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Avatar>
          </ListItemAvatar>
        )}
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    </List>
  );
};

export default ListItemComp;
