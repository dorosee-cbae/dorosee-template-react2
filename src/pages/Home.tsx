import { ChangeEvent, useState } from 'react';
import SampleForm from '../shared/components/SampleForm';
import { useSampleHook } from '../shared/hooks/useSampleHook';
import { useSampleStore } from '../shared/store/useSampleStore';
import { DATA_NAME } from '../shared/config/const';
const Home = () => {
  const { count, increment } = useSampleStore();
  const [id, setId] = useState<string>('');
  const { data, isLoading, error } = useSampleHook(id);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <div className="p-4">
      <SampleForm />
      <button onClick={increment}>증가</button>
      <p className="mt-2">카운트: {count}</p>
      <h2 style={{ margin: '20px', color: 'red' }}>
        데이터 이름 : {DATA_NAME}
        <br />
        1입력 시 1번 데이터 조회 / 빈 문자열 입력 시 전체 데이터 조회 / 0 입력
        시 에러
      </h2>
      <div style={{ margin: '20px' }}>
        <input type="text" value={id} onChange={handleInputChange} />
      </div>
      {isLoading && <div>로딩중...</div>}
      {error && <div>에러가 발생했습니다: {error.message}</div>}
      {data && (
        <pre className="mt-2">데이터: {JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export { Home };
