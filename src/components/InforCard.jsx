import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

export default function InforCard({ image, description, title }) {
  // const actionStyle = { marginLeft: '80px' }

  const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '10px', marginBottom: '10px', fontSize: '12px' }

  return (
    <div>
      <CardActionArea style={{ marginBottom: '5px' }}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="220"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align='left'>
            {description}
          </Typography>
          {/* <CardActions style={actionStyle}> */}
          {/* <Button style={buttonStyle}>
                           Read More
                        </Button> */}

          {/* </CardActions> */}

        </CardContent>

      </CardActionArea>
      <Button style={buttonStyle}>
        Read More
      </Button>
    </div>
  )
}
