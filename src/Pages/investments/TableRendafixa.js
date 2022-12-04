import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc,inst,qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, inst, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
];

const bla = {
  "totalStock": 248.81,
  "stock": [
      {
          "id": 34,
          "stock": {
              "id": "AAPL",
              "name": "Apple Inc."
          },
          "broker": {
              "id": 2,
              "name": "XP Investimentos"
          },
          "quantity": 10.0,
          "initialValue": 10.0,
          "initialDate": "2022-01-02 00:00:00",
          "price": 179.26
      },
      {
          "id": 35,
          "stock": {
              "id": "ABNB",
              "name": "Airbnb, Inc."
          },
          "broker": {
              "id": 2,
              "name": "XP Investimentos"
          },
          "quantity": 10.0,
          "initialValue": 10.0,
          "initialDate": "2022-06-02 00:00:00",
          "price": 121.26
      }
  ],
  "totalCheckingAccount": 0.0,
  "checkingAccount": [],
  "totalFixedIncome": 1100.0,
  "fixedIncome": [
      {
          "id": 11,
          "paper": "LCA",
          "issuer": "Bradesco",
          "yieldRate": 1.1,
          "initialDate": "2021-12-15 00:00:00",
          "finalDate": "2022-12-15 00:00:00",
          "initialValue": 1000.0,
          "broker": {
              "id": 1,
              "name": "Binance"
          }
      }
  ]
}

const teste = bla.fixedIncome.map(objeto => {
  return createRow(objeto.paper,objeto.issuer,objeto.initialValue,objeto.yieldRate)
})

teste.forEach(row => {
  rows.push(row)  

});

console.log(rows)

export default function TableRendafixa() {
    const invoiceSubtotal = subtotal(rows);

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Details
            </TableCell>
            <TableCell align="right">
                Price
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell>Instituição</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{row.inst}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right" colSpan={3}>{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}