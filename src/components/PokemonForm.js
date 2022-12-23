import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handlePost}) {
  const [nameInput, setNameInput] = useState("")
  const [hpInput, setHpInput] = useState("")
  const [frontInput,setFrontInput] = useState("")
  const [backInput, setBackInput] = useState("")

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          handlePost();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value = {nameInput} onChange = {setNameInput(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value = {hpInput} onChange = {setHpInput(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = {frontInput} onChange = {setFrontInput(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {backInput} onChange = {setBackInput(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
