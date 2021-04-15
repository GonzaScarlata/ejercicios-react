import React, { useEffect, useState } from "react";
import ColorSection from "./ColorSection";


const ColorForm = () => {
    const colorsFromLS = JSON.parse(localStorage.getItem("colorsArray")) || [];
    const [colorsArray, setColorsArray] = useState(colorsFromLS);
    const [color, setColor] = useState("");

    useEffect(() => {
        localStorage.setItem("colorsArray",JSON.stringify(colorsArray))
    }, [colorsArray])

    const handleSubmit = (e) => {
        e.preventDefault();
        setColorsArray([...colorsArray, color]);
        setColor("");
    };

    const handleChange = (e) => {
        const color = e.target.value;
        setColor(color);
    };

    // No estoy pudiendo usar este método para eliminar colores
    const deleteColor = (index) => {
        let newArray = colorsArray;
        for (let i = 0; i < colorsArray.length; i++){
            if (i === index) {
                newArray.splice(i, 1);
            }
        }
        setColorsArray(newArray);
    }

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <label className="text-light" for="formGroupExampleInput">
                    Tableta de colores
                </label>
                <div class="form-group d-flex justify-content-between">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Escriba un nombre de color en inglés"
                        onChange={handleChange}
                        value={color}
                    />
                    <button
                        className="btn btn-outline-light btn-primary"
                        type="submit"
                    >
                        Agregar
                    </button>
                </div>
            </form>
            <ColorSection colorsArray={colorsArray} deleteColor={deleteColor} />
        </div>
    );
};

export default ColorForm;
