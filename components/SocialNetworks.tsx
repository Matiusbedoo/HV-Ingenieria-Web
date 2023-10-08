import { useRouter } from 'next/router';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconNetworks } from './IconNetworks';

const SocialNetworks = () => {
    const router = useRouter();

    const redirectToSocialProfile = (profile: string) => {
        switch (profile) {
            case 'LinkedIn':
                router.push('https://www.linkedin.com/in/mateo-bedoya-ospina-8b6960294/');
                break;
            case 'instagram':
                router.push('https://www.instagram.com/mateobedoyaospina/');
                break;
            case 'facebook':
                router.push('https://www.facebook.com/mateo.bedoyaospina.1');
                break;
            case 'GitHub':
                router.push('https://github.com/Matiusbedoo');
                break;
            default:
                break;
        }
    };

    return (
        <div className="fixed top-0 right-0 h-screen w-16 bg-white flex flex-col items-center justify-center">
            <span className='font-semibold text-black'>Links</span>
            <IconNetworks IconComponent={FaLinkedin} onClick={() => redirectToSocialProfile('LinkedIn')} />
            <IconNetworks IconComponent={FaInstagram} onClick={() => redirectToSocialProfile('instagram')} />
            <IconNetworks IconComponent={FaFacebook} onClick={() => redirectToSocialProfile('facebook')} />
            <IconNetworks IconComponent={FaGithub} onClick={() => redirectToSocialProfile('GitHub')} />
        </div>
    );
};

export { SocialNetworks };