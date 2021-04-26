import React, { useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));
export default function Content() {
    const [like, setLike] = useState(0)
    const [islike, setIsLike] = useState(false)
    const classes = useStyles();

    return (
        <div>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="https://img.idesign.vn/w1600/2019/11/idesign_vangogh_thumb.jpg" />
                <Card.Body>
                    <Card.Title>The Starry Night</Card.Title>
                    <Card.Text>
                    Vincent van Gogh
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <button type="button" className="btn btn-primary"onClick={()=>{setIsLike(! like);setLike(like-1)}}> youlike {islike}</button>
                    <button type="button" className="btn btn-primary"onClick={()=>{setLike(like+1)}}>like {like}</button>
                    <Card.Link href="#">detail</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>        </div>
    )
}
