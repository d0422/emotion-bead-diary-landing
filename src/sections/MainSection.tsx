import Font from '../components/Font';
import Image from '../components/Image';
import SectionLayout from '../components/SectionLayout';
import StoreButton from '../components/StoreButton';

export default function MainSection() {
  return (
    <SectionLayout full>
      <div className="flex justify-evenly items-center mobile:gap-4 mobile:flex-col-reverse">
        <div className=" h-full items-center flex flex-col justify-center gap-6 mobile:items-center">
          <Image srcFilename="logo" className="w-1/3 min-w-32" alt="logo" />
          <Font type="title" bold>
            감정 구슬 일기
          </Font>
          <div className="gap-1 flex flex-col items-center">
            <Font type="body1">오늘의 감정, 구슬로 담아보세요</Font>
            <Font type="body2">
              하루의 특별한 순간들을 쉽게 기록하고, 감정을 분석해요.
            </Font>
          </div>
          <div className="flex gap-4">
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.chatdiary"
              src="googlePlay"
              name="Google Play"
            />
            <StoreButton
              href="https://apps.apple.com/ko/app/%EA%B0%90%EC%A0%95%EA%B5%AC%EC%8A%AC%EC%9D%BC%EA%B8%B0/id6739556857"
              src="appStore"
              name="Apple Store"
            />
          </div>
          <a
            className="underline"
            href="https://energetic-palm-634.notion.site/15d9460ce7a780979407f38c40bd2e17?pvs=4"
            target="_blank"
          >
            앱 개인정보 처리방침
          </a>
        </div>
      </div>
    </SectionLayout>
  );
}
