import React, { useEffect, useState } from "react";
import ColorSection from "./ColorSection";


const ColorForm = () => {
    const colorsFromLS = JSON.parse(localStorage.getItem("colorsArray")) || [];
    const [colorsArray, setColorsArray] = useState(colorsFromLS);
    const [color, setColor] = useState("");
    

    useEffect(() => {
        localStorage.setItem("colorsArray",JSON.stringify(colorsArray));
        console.log('ejecutando UseEffect');
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

    // No estoy pudiendo usar este método para eliminar colores, creo que hay problema en el useEffect
    // Parece ser que me está modificando el colorsArray aunque yo no quiera... asignarlo a New Array no me sirve
    // Para solucionarlo tuve que usar el método slice, para que realmente se creara el nuevo array "newArray"
    const deleteColor = (index) => {
        var newArray = colorsArray.slice();
        for (let i = 0; i < colorsArray.length; i++){
            if (i === index) {
                newArray.splice(i, 1);
            }
            setColorsArray(newArray);
        }
        console.log(colorsArray, 'Colors Array');
        console.log(newArray, 'New array');
    }

    return (
        <div className="container my-5">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label className="text-light" for="formGroupExampleInput">
                    Tableta de colores
                </label>
                <div class="form-group d-flex justify-content-between">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Escriba un nombre de color en inglés"
                        onChange={(e)=>handleChange(e)}
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
