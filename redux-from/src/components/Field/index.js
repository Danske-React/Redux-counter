import React, { Fragment } from "react";

export const myInput = props => {
    const { meta} = props
    return (
        <Fragment>
            <input {...props.input} type={props.type} placeholder={props.placeholder}></input>
            {meta.error && meta.touched &&
                <div>
                    {meta.error}
                </div>}
        </Fragment>

    )
}