import BackButton from "../../components/backButton";
import QrCodeComponent from "../../components/qrCode";
import ScreenLayout from "../../components/layout/screenLayout";
import useTranslate from "../../hooks/useTranslate";

function Service() {
    const { t } = useTranslate();

    const qrCodeUrl = 'https://www.youtube.com/'

    return (
        <ScreenLayout image="../../public/images/backgroundAccepted.png" timerInitialTime={30}>
            <div className="text-center h-screen flex flex-col justify-center items-center select-none gap-11">
                <BackButton url="/home" />
                <p className="text-4xl normal-case max-w-[500px] mb-5 gap-4">
                    {t('externalService.textQR')} <br />
                    {t('externalService.textQR2')} <br />
                </p>
                <div>
                    <QrCodeComponent value={qrCodeUrl} />
                </div>
                <p className="text-4xl nomrmal-case max-w-[300px] pt-[3.75rem]">
                    {t('help.textDown')}
                </p>
            </div>
        </ScreenLayout>
    )
}

export default Service