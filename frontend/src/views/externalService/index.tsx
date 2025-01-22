import BackButton from "../../components/backButton";
import QrCodeComponent from "../../components/qrCode";
import ScreenLayout from "../../components/layout/screenLayout";



function Service() {
    const qrCodeUrl = 'https://www.youtube.com/'
    
    return (
        <ScreenLayout image="../../public/images/backgroundAccepted.png" timerInitialTime={30}>
            <div className="text-center h-screen flex flex-col justify-center items-center select-none gap-11">
               <BackButton url="/home" />
                <p className="text-4xl max-w-[500px] mb-5 gap-4">
                    {'Escanea el QR para acceder a'} <br />
                    {'los servicios externos'} <br />
                </p>
                <div>
                    <QrCodeComponent value={qrCodeUrl} />
                </div>
                <p className="text-4xl max-w-[300px] pt-[3.75rem]">
                    {'¡Gracias por tu colaboración!'}
                </p>
            </div>
            
        </ScreenLayout>
    )
}

export default Service