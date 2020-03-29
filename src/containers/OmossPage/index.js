import React, { Fragment } from 'react';

export const OmossPage = () => {
    return (
        <Fragment>
            <h3>
                Informasjon om oss, og prosjektet
            </h3>

            <p>
                Vi er syv studenter som tar faget TPK4115 ved NTNU.
                I forbindelse med dette faget har vi i oppgave å lage et
                verktøy som skal bidra til læringsutbytte til studenter som tar
                dette emnet. Vår gruppe, nr 33, har valgt å lage en nettside
                med quiz som skal være eksamensforberedende, og forhåpentligvis
                være et godt alternativ som bidrar til variert lesing mot eksamen.
            </p>

            <p>
                For å kjøpe læreboken i faget "Veien til suksess" av Bassahm
                Hussein
            </p>

            <a href="https://www.akademika.no/veien-til-suksess/hussein-bassam/9788245020724"><button
                className="dropbtn">trykk her</button></a>

            <p>
                Våren 2020
            </p>
        </Fragment>
    )
}

export default OmossPage;