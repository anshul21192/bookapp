import * as React from "react";
import SecurityStatus from "./securityStatus";
import "../security.css";  

function SecurityCard({...item}){
    let id=item.id;
    let name=item.name;
    let isin= item.isin;
    let cusip=item.cusip;
    let issuer=item.issuer;
    let maturityDate=item.maturityDate;
    let coupon=item.coupon;
    let type=item.type;
    let faceValue=item.faceValue;
    let status=item.status;
    return <div className="job_card">
                <div className="job_details">
                    <SecurityStatus status={status}></SecurityStatus>
                    <div className="text">
                        <h1>Security Name: {name}</h1>
                        <h4>Secuirty ID: {id}</h4>
                        <p>ISIN Number: <strong>{isin}</strong></p>
                        <p>CUSIP Number: <strong>{cusip}</strong></p>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>Issuer: <strong>{issuer}</strong></h4>
                    <p>Coupon: <strong>{coupon}</strong></p>
                    <p>Type: <strong>{type}</strong></p>
                    <p>Maturity Date:<strong>{maturityDate}</strong></p>
                    <p>FaceValue: <strong>{faceValue}</strong></p>
                </div>
            </div>
}
export default SecurityCard;