import Table from 'react-bootstrap/Table';
import React from "react";
import "./table-styles.scss";
import CheckBox from '../../reusableComponent/CheckBox/CheckBox';
import { FaCcPaypal,FaCcVisa,FaCcMastercard } from "react-icons/fa";

const SampleTable = () => {
  return (
    <div className="card table-card" >
  <div className="card-body">
    <h5><b>Latest Transaction</b></h5>

    <Table className='table-record' responsive>
      <thead>
        <tr>
          <th> <CheckBox name="box1" />    </th>
          <th>Order ID</th>
          <th>Billing Name</th>
          <th>Date</th>
          <th>Total</th>
          <th>Payment Status</th>
          <th>Payment Method</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><CheckBox name="box2" /></td>
          <td><b>#SK2540</b></td>
          <td>Neal Matthews</td>
          <td>07 Oct, 2019</td>
          <td>$400</td>
          <td><span className='paid'>Paid</span></td>
          <td><i><FaCcMastercard /></i>Mastercard</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm rounded-pill">View Details</button>
          </td>
        </tr>

        <tr>
          <td><CheckBox name="box2" /></td>
          <td><b>#SK2541</b></td>
          <td>Jamal Burnett</td>
          <td>07 Oct, 2019</td>
          <td>$380</td>
          <td><span className='chargeback'>Chargeback</span></td>
          <td><i><FaCcVisa /></i>Visa</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm rounded-pill">View Details</button>
          </td>
        </tr>

        <tr>
          <td><CheckBox name="box2" /></td>
          <td><b>#SK2542</b></td>
          <td>Juan Mitchell</td>
          <td>07 Oct, 2019</td>
          <td>$400</td>
          <td><span className='paid'>Paid</span></td>
          <td><i><FaCcPaypal /></i>Paypal</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm rounded-pill">View Details</button>
          </td>
        </tr>

        <tr>
          <td><CheckBox name="box2" /></td>
          <td><b>#SK2543</b></td>
          <td>Barry Dick</td>
          <td>09 Oct, 2019</td>
          <td>$412</td>
          <td><span className='paid'>Paid</span></td>
          <td><i><FaCcMastercard /></i>Mastercard</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm rounded-pill">View Details</button>
          </td>
        </tr>

        <tr>
          <td><CheckBox name="box2" /></td>
          <td><b>#SK2544</b></td>
          <td>Ronald Taylor</td>
          <td>04 Oct, 2019</td>
          <td>$414</td>
          <td><span className='refund'>Refund</span></td>
          <td><i><FaCcVisa /></i>Visa</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm rounded-pill">View Details</button>
          </td>
        </tr>

        <tr>
          <td><CheckBox name="box2" /></td>
          <td><b>#SK2545</b></td>
          <td>Neal Matthews</td>
          <td>08 Oct, 2019</td>
          <td>$400</td>
          <td><span className='paid'>Paid</span></td>
          <td><i><FaCcPaypal /></i>Paypal</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm rounded-pill">View Details</button>
          </td>
        </tr>

      </tbody>
    </Table>
    </div>
</div>
  );
};

export default SampleTable;