import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ListItemCompResponsive = ({
  img,
  imgLink,
  primary,
  secondary,
  primary1,
  secondary1,
}) => {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        {img && (
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
        <ListItemText
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 100,
          }}
          primary={primary}
          secondary={secondary}
        />
        <ArrowRightAltIcon sx={{ alignSelf: "flex-start", mt: 0.5 }} />
        <ListItemText
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 100,
          }}
          primary={primary1}
          secondary={secondary1}
        />
      </ListItem>
    </List>
  );
};
export default ListItemCompResponsive;
