import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Modal, Form, Card, Col, Row } from 'react-bootstrap';
import Header from '../COMPONENTS/Header';
import { getUserAPI, uploadAPI } from '../services/allAPI';

function SellerPage() {
    const [show, setShow] = useState(false);
    const [allProperties, setAllProperties] = useState([]);
    const [sellerInputs, setSellerInputs] = useState({
        place: "",
        imageurl: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
        hospitals: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (sellerInputs.place && sellerInputs.imageurl && sellerInputs.area && sellerInputs.bedrooms && sellerInputs.bathrooms && sellerInputs.hospitals) {
            try {
                const result = await uploadAPI(sellerInputs);
                if (result.status === 200 || result.status === 201) {
                    setSellerInputs({ place: "", imageurl: "", area: "", bedrooms: "", bathrooms: "", hospitals: "" });
                    alert('Data uploaded successfully');
                    getAllProperties(); // Refresh the list after upload
                } else {
                    alert("Failed to upload data");
                }
            } catch (error) {
                console.error('Error uploading data:', error);
                alert("Failed to upload data. Please try again.");
            }
        } else {
            alert("Please fill the form completely!!!");
        }
    };

  
   useEffect(()=>{
     getAllProperties()
   },[allProperties])
 
   const getAllProperties = async ()=>{
     try{
       const result = await getUserAPI()
       console.log(result);
       if(result.status==200){
         setAllProperties(result.data)
       }
     }catch(err){
       console.log(err);
     }
   }
 

 

    return (
        <>
            <Header />
            <div className='row'>
                <div className="col-lg-6">
                    <Button style={{ marginTop: '200px' }} variant="primary" onClick={handleShow}>
                        ADD Details FOR SELL
                    </Button>
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>House Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='border rounded border-secondary p-3'>
                                <p>Please fill the following details</p>
                                <FloatingLabel controlId="floatingCaption" label="Place" className="mb-3">
                                    <Form.Control value={sellerInputs.place} onChange={e => setSellerInputs({ ...sellerInputs, place: e.target.value })} type="text" placeholder="Place located" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingImageURL" label="Image URL" className="mb-3">
                                    <Form.Control value={sellerInputs.imageurl} onChange={e => setSellerInputs({ ...sellerInputs, imageurl: e.target.value })} type="text" placeholder="Image URL" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingArea" label="Area" className="mb-3">
                                    <Form.Control value={sellerInputs.area} onChange={e => setSellerInputs({ ...sellerInputs, area: e.target.value })} type="text" placeholder="Area of the place located" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingBedrooms" label="Number of Bedrooms" className="mb-3">
                                    <Form.Control value={sellerInputs.bedrooms} onChange={e => setSellerInputs({ ...sellerInputs, bedrooms: e.target.value })} type="text" placeholder="Number of bedrooms" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingBathrooms" label="Number of Bathrooms" className="mb-3">
                                    <Form.Control value={sellerInputs.bathrooms} onChange={e => setSellerInputs({ ...sellerInputs, bathrooms: e.target.value })} type="text" placeholder="Number of bathrooms" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingHospitals" label="Nearby Hospitals" className="mb-3">
                                    <Form.Control value={sellerInputs.hospitals} onChange={e => setSellerInputs({ ...sellerInputs, hospitals: e.target.value })} type="text" placeholder="Nearby hospitals" />
                                </FloatingLabel>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button onClick={handleRegister} variant="primary">Upload</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <Row>
                {allProperties.length > 0 ? (
                    allProperties.map(property => (
                        <Col key={property._id} className=''>
                            <Card className='mt-5' style={{ width: '18rem', height: '350px' }}>
                                <Card.Img variant="top" src={property.imageurl} />
                                <Card.Body>
                                    <Card.Title>Area: {property.area}</Card.Title>
                                    <Card.Text>Place: {property.place}</Card.Text>
                                    <Card.Text>Number of Bedrooms: {property.bedrooms}</Card.Text>
                                    <Card.Text>Number of Bathrooms: {property.bathrooms}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div className='fw-bolder text-danger m-5 text-center'>Project Not Found!!!</div>
                )}
            </Row>
        </>
    );
}

export default SellerPage;
