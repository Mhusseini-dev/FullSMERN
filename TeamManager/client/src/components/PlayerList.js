import React from 'react';
import styles from './style.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PlayerList = props => {
    const {players, handleDelete} = props;

    return (
        <center>
              <TableContainer component={Paper}>
              <Table  size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                        <TableCell>Player Name</TableCell>
                        <TableCell>Preferred Position</TableCell>
                        <TableCell>Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                    {
                        players.map((player, index) => {
                            return (
                                <TableCell  key={index}>
                                    <TableCell >{player.name}</TableCell >
                                    <TableCell >{player.preferredPosition}</TableCell >
                                    <TableCell >
                                        <button onClick={() => handleDelete(player._id)}>Delete</button>
                                    </TableCell >
                                </TableCell >
                            );
                        })
                    }
                </TableBody>
            </Table>
            </TableContainer>
            </center>
            
    );
}

export default PlayerList;
