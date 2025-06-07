import Image from "next/image";

const WelcomeCard: React.FC = () => {
  return (
    <div className="welcome-card rounded shadow-lg text-center">
      <Image
        src="/welcome5.gif"
        alt="Next.js logo"
        width={400}
        height={100}
        priority
      />
      <Image
        src="/waving_cappibara2.gif"
        alt="Welcome Icon"
        width={140}
        height={140}
        className="mx-auto"
      />
      <hr className="border-t border-gray-200" />
    </div>
  );
};

export default WelcomeCard;