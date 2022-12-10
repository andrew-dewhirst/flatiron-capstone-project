import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders( {completedOrders, user }) {

  console.log(completedOrders)

  const price = completedOrders?.map((cart) => cart.map((card) => card.price))
  const cartTotal = price?.map((amount) => amount.map(Number))
  const saleAmount = cartTotal?.map((item) => item.reduce((a,b) => a + b, 0))
  const maxNumber = 100;

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email Confirmation</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {saleAmount?.map((total, index) => (
            <TableRow key={index}>
              <TableCell>{Math.floor(Math.random() * maxNumber)}</TableCell>
              <TableCell>{user?.first_name} {user?.last_name}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell align="right">${total.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}