import { faTrashCan, faEdit, faE } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableRow = ({data}) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{data.name}</td>
      <td>{data.gender}</td>
      <td>{data.dob}</td>
      <td>{data.nationality}</td>
      <td>{data.address}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.admissionDate}</td>
      <td>{data.courses}</td>
      <td><span className="text-danger"><FontAwesomeIcon icon={faTrashCan} /></span> <span className="text-success"><FontAwesomeIcon icon={faEdit} /></span></td>
    </tr>
  );
};

export default TableRow;