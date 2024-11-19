import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    // console.log(input);

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === ""){
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    // const onChangeName = (e)=>{
    //     setInput({
    //         ...input, // name과 관련없는 값들은 spread 연산자 이용해서 그대로 유지
    //         name : e.target.value
    //     })
    // }

    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input, 
    //         birth : e.target.value
    //     })
    // }

    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input, 
    //         country : e.target.value
    //     })
    // }

    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input, 
    //         bio : e.target.value
    //     })
    // }


    // 비어있는 이름 칸에 변화가 생겼을때? => 이벤트핸들러함수 => input에 이름 입력하면 onChange 함수 실행
    return (


        <div>

            <div>
                <input
                    ref={inputRef}
                    name="name" 
                    value={input.name}
                    onChange={onChange} 
                    placeholder={"이름"} 
                />
            </div>

            <div>   
                <input
                    name="birth"
                    value={input.birth} 
                    onChange={onChange} 
                    type="date"
                />
            </div>
            <div>
                <select 
                    name="country"
                    value={input.country} 
                    onChange={onChange}
                >
                        <option value=""></option>
                        <option value="kr">한국</option>
                        <option value="us">미국</option>
                        <option value="uk">영국</option>
                </select>
                {/* {country} */}
            </div>

            <div>
                <textarea 
                    name="bio" 
                    value={input.bio} 
                    onChange={onChange} 
                />
                {/* {bio} */}
            </div>


            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;