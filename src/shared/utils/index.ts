import dayjs from 'dayjs';
import 'dayjs/locale/ko';

class CommonUtil {
  static isEmpty(str: string) {
    return !str || str.trim() === '';
  }

  /**
   * 문자열을 JSON 형식으로 변환
   * @param str 문자열
   * @returns JSON 형식의 문자열
   */
  static stringToJson(str: string) {
    if (this.isEmpty(str)) {
      throw new Error('문자열이 비어있습니다.');
    }

    return JSON.stringify(str, null, 2);
  }

  /**
   * Date 객체를 'YYYY-MM-DD' 형식으로 변환
   * @param date Date 객체
   * @returns YYYY-MM-DD 형식의 문자열
   * @example
   * formatDateToYYYYMMDD(new Date()) // '2024-03-20'
   */
  static formatDateToYYYYMMDD(date: Date): string {
    return dayjs(date).format('YYYY-MM-DD');
  }

  /**
   * Date 객체를 'YYYY년 MM월 DD일' 형식으로 변환
   * @param date Date 객체
   * @returns YYYY년 MM월 DD일 형식의 문자열
   * @example
   * formatDateToKorean(new Date()) // '2024년 3월 20일'
   */
  static formatDateToKorean(date: Date): string {
    return dayjs(date).locale('ko').format('YYYY년 M월 D일');
  }

  /**
   * Date 객체를 'YYYY년 MM월 DD일 dddd' 형식으로 변환
   * @param date Date 객체
   * @returns YYYY년 MM월 DD일 요일 형식의 문자열
   * @example
   * formatDateToKoreanWithDay(new Date()) // '2024년 3월 20일 수요일'
   */
  static formatDateToKoreanWithDay(date: Date): string {
    return dayjs(date).locale('ko').format('YYYY년 M월 D일 dddd');
  }
}

export default CommonUtil;
