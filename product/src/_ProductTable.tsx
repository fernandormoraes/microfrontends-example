import Table from 'react-bootstrap/Table';

export default function ProductTable(){
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>SKU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>DUFF BEER</td>
            <td>$2.99</td>
            <td>7910010010103</td>
          </tr>
          <tr>
            <td>2</td>
            <td>DR PEPPER 1LT</td>
            <td>$3.19</td>
            <td>3820010010103</td>
          </tr>
          <tr>
            <td>3</td>
            <td>DICED BEEF</td>
            <td>$14.99</td>
            <td>26211</td>
          </tr>
          <tr>
            <td>4</td>
            <td>MAHATMA RICE 5KG</td>
            <td>$7.99</td>
            <td>3825112210103</td>
          </tr>
        </tbody>
      </Table>
    )
}
