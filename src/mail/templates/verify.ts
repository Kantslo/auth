export const verify = (name: string, link: string) => {
    return `<html>
                <head>
                    <title>Verify your account</title>
                </head>
                <body style="background-image: linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%);">
                    <div style="padding-left: 5%; padding-right: 5%; padding-top: 6%; padding-bottom: 6%; color: #ffffff;">
                        <p style="color: #DDCCAA; text-transform: uppercase; text-align: center; margin-top: 10px;">Auth API</p>
                        <p style="margin-top: 72px;">Hola ${name}!</p>
                        <a href="${link}">Verify</a>
                    </div>
                </body>
            </html>`
}