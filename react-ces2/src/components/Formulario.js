import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Formulario() {
    return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese Email..." />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Enviar
        </Button>
    </Form>
    )
}
