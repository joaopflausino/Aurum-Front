import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export default function GutterlessList({objeto}) {

    console.log(objeto);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {objeto.map((objeto) => (
        <ListItem
          key={objeto.name}
          disableGutters
          secondaryAction={
            <Button variant="outlined" color="error" sx={{ justifyContent: "flex-end" }} >
                Concluir Investimento           
            </Button>
          }
        >
          <ListItemText primary={objeto.name} />
        </ListItem>
      ))}
    </List>
  );
}