import Table from 'react-bootstrap/Table';

export default function StockTable(){
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>DUFF BEER</td>
            <td>145</td>
            <td>UN</td>
          </tr>
          <tr>
            <td>2</td>
            <td>DR PEPPER 1LT</td>
            <td>125</td>
            <td>UN</td>
          </tr>
          <tr>
            <td>3</td>
            <td>DICED BEEF</td>
            <td>56.78</td>
            <td>KG</td>
          </tr>
          <tr>
            <td>4</td>
            <td>MAHATMA RICE 5KG</td>
            <td>489</td>
            <td>UN</td>
          </tr>
        </tbody>
      </Table>
    )
}
