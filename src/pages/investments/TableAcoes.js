import React from 'react';
import { Table } from 'reactstrap';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, inst, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc,inst, qty, unit, price };
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

const teste = bla.stock.map(objeto => {
  return createRow(objeto.stock.name + " " + objeto.stock.id,objeto.broker.name,objeto.quantity,objeto.price)
})

teste.forEach(row => {
  rows.push(row)  

});

export default function TableAcoes() {
    const invoiceSubtotal = subtotal(rows);

    return (
    <Table
    hover
    responsive
    size="sm"
    >
      <thead>
        <tr>
          <th>
            Desc
          </th>
          <th>
            Instituição
          </th>
          <th>
            Qty.
          </th>
          <th>
            Unit
          </th>
          <th>
            Soma
          </th>
        </tr>
      </thead>
      <tbody>
      {rows.map((row) => (
        <tr>
          <th scope="row">
            {row.desc}
          </th>
          <td>
            {row.inst}
          </td>
          <td>
            {row.qty}
          </td>
          <td>
            {row.unit}
          </td>
          <td>
            {ccyFormat(row.price)}
          </td>
        </tr>
      ))}
      <tr>
        <th>
          Total
        </th>
        <th>

        </th>
        <th>

        </th>
        <th>

        </th>
        <td>
          {ccyFormat(invoiceSubtotal)}
        </td>
      </tr>
      </tbody>
    </Table>

  );
}