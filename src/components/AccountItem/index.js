import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0de0e1a0ae47a80946307eaf9943b589~c5_720x720.jpeg?x-expires=1677412800&x-signature=q9gt2B%2Bclyk8KxRsDHsgXXMDMbM%3D"
                alt=""
                className={cx('avatar')}
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
