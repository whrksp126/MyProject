import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './AddEdit.css';
import fireDb from '../firebase';
import {toast} from 'react-toastify';

const initialState = {
  itemName: '',
  buyDay: '',
  buyPrice: '',
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const {itemName, buyDay, buyPrice, sellDay, sellPrice} = state;

  const navigate = useNavigate();

  const {id} = useParams()

  useEffect(() => {
    fireDb.child('stock').on('value', (snapshot) => {
      if(snapshot.val() !== null){
        setData({...snapshot.val()})
      } else {
        setData({})
      }
    });

    return () => {
      setData({});
    };
  }, [id])
  
  // 수정 기능 부여
  useEffect(()=>{
    if(id) {
      setState({...data[id]})
    } else {
      setState({...initialState})
    }

    return ()=>{
      setState({...initialState})
    }
  }, [id,data])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!id){
      if(!itemName || !buyDay || !buyPrice) {
        toast.error('종목 명, 매수 일, 매수 금액은 필수 입력 사항입니다.')
      } else {
        fireDb.child('stock').push(state, (err) => {
          if(err) {
            toast.error(err);
          } else {
            toast.success('종목 추가 성공')
          }
        })
        setTimeout(()=>navigate('/', 500))
      }
    } else {
      if (!data[id].sellDay || !data[id].sellPrice) {
        // 저장된 매도 일, 매도 금액 중 하나라도 없는 경우
        if(!sellPrice || !sellDay){
          // 새로 입력 된 매도 금액, 매도 일 중 하나라도 없는 경우
          if(!sellPrice && sellDay){
            toast.error('매도 금액을 입력해 주세요')
          } else if (sellPrice && ! sellDay){
            toast.error('매도 일을 입력해 주세요')
          }
        } else {
          // 새로 입력 된 매도 금액, 매도 일 둘 다 있을 경우
          fireDb.child(`stock/${id}`).set(state, (err) => {
            if(err) {
              toast.error(err);
            } else {
              toast.success('매도 정보를 추가 하셨습니다.')
            }
          });
        } setTimeout(()=>navigate('/'), 500);
      }
    }
  }

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if(!itemName || !buyDay || !buyPrice){
  //     // 최초 저장시 종목 명, 매수 일, 매수 금액 중 하나라도 입력이 없을 경우
  //     toast.error('종목 명, 매수 일, 매수 금액은 필수 입력 사항 입니다.')
  //     console.log('최초 저장시 종목 명, 매수 일, 매수 금액 중 하나라도 입력이 없을 경우')
  //   } else if (id) {
  //     if (sellPrice || sellDay) {
  //       // id가 잇는데 저장된 매도 일과 매도 금액 중 하나라도 없는 경우
  //       console.log('id가 잇는데 저장된 매도 일과 매도 금액 중 하나라도 없는 경우')

  //       if ((data[id].itemName !== itemName) // 종목 명이 변경된 경우
  //        || (data[id].buyDay !== buyDay) // 매도 일이 변경된 경우
  //        || (data[id].buyPrice !== buyPrice) // 매도 금액이 변경된 경우
  //        // 종목 명, 매수 일, 매수 금액 중 하나라도 변경 된 경우
          
  //       ) {
  //         console.log('종목 명, 매수 일, 매수 금액 중 하나라도 변경 된 경우')

  //         fireDb.child(`stock/${id}`).set(state, (err) => {
  //           if(err){
  //             toast.error(err);
  //             // 수정 오류가 난 경우
  //             console.log('수정 오류가 난 경우')
  //           } else {
  //             toast.success('종목 수정 성공')
  //             // 수정이 성공한 경우
  //             console.log('수정이 성공한 경우')
  //           }
  //         })
  //         setTimeout(()=>navigate('/', 500))
  //       } 
  //       else if (!sellPrice && sellDay) {
  //         // 매도 일은 있지만 매도 금액이 없는 경우
  //         console.log('매도 일은 있지만 매도 금액이 없는 경우')

  //         toast.error('매도 금액을 입력하세요.')
  //       } else if (sellPrice && !sellDay) {
  //         // 매도 금액은 있지만 매도 일이 없는 경우
  //         console.log('매도 금액은 있지만 매도 일이 없는 경우')

  //         toast.error('매도 일을 입력하세요')
  //       }

  //     } else if (data[id].sellPrice || data[id].sellDay) {
  //       // 매도 금액, 매도 일 이 모두 입력 되어 있는 경우
  //       console.log('매도 금액, 매도 일 이 모두 입력 되어 있는 경우')

  //       if((data[id].itemName !== itemName) // 종목 명이 변경된 경우
  //       || (data[id].buyDay !== buyDay) // 매도 일이 변경된 경우
  //       || (data[id].buyPrice !== buyPrice) // 매도 금액이 변경된 경우
  //       || (data[id].sellDay !== sellDay) // 매도 일이 변경된 경우
  //       || (data[id].sellPrice !== sellPrice) // 매도 금액이 변경된 경우
  //       // 저당된 값이 하나라도 변경된 경우
  //       ) {
  //         console.log('저당된 값이 하나라도 변경된 경우')

  //         if(sellPrice || sellDay){
  //           // 매도 금액과, 매도 일이 잇는 경우
  //           console.log('매도 금액과 매도 일이 있는 경우')

  //           fireDb.child(`stock/${id}`).set(state, (err) => {
  //             if(err){
  //               toast.error(err);
  //             } else {
  //               toast.success('종목 수정 성공')
  //             }
  //           })
  //           setTimeout(()=>navigate('/', 500))
  //         }  else if ( !sellPrice && !sellDay) {
  //           console.log('매도취소')
  //         }

        
  //       } 
  //       else {
  //        toast.error('변경된 정보가 없습니다.')
  //       }
  //     } 

      
  //     else {
  //       fireDb.child(`stock/${id}`).set(state, (err) => {
  //         if(err){
  //           toast.error(err);
  //         } else {
  //           toast.success('종목 수정 성공')
  //         }
  //       })
  //       setTimeout(()=>navigate('/', 500))
  //     }
  //   } else {
  //     fireDb.child('stock').push(state, (err) => {
  //       if(err) {
  //         toast.error(err);
  //       } else {
  //         toast.success('종목 추가 성공')
  //       }
  //     })
  //     setTimeout(()=>navigate('/', 500))
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if(!itemName || !buyDay || !buyPrice) {
  //     toast.error('각 입력 필드에 값을 입력하세요.')
  //   } else {
  //     if(!id){
  //       fireDb.child('stock').push(state, (err) => {
  //         if(err) {
  //           toast.error(err);
  //         } else {
  //           toast.success('종목 추가 성공')
  //         }
  //       });
  //     } else {
  //         fireDb.child(`stock/${id}`).set(state, (err) => {
  //           if(err) {
  //             toast.error(err);
  //           } else {
  //             toast.success('종목 수정 성공')
  //           }
  //         });
        
  //     }
  //     setTimeout(()=>navigate('/'), 500);
  //   }
  // }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  }

  return (
    <div style={{marginTop: '100px'}}>
      <h2>종목 추가 페이지</h2>
      <form onSubmit={handleSubmit} style={{margin: 'auto', padding: '15px', maxWidth: '400px', alignItems: 'center'}} >
        <label htmlFor='itemName'>종목 명 *</label>
        <input value={itemName || ""} onChange={handleInputChange} type='text' id='itemName' name='itemName' placeholder='삼성전자' />

        <label htmlFor='buyDay'>매수 일 *</label>
        <input value={buyDay ||""}onChange={handleInputChange} type='date' id='buyDay' name='buyDay'/>

        <label htmlFor='buyPrice' >매수 금액 *</label>
        <input value={buyPrice || ""} onChange={handleInputChange} type='number' id='buyPrice' name='buyPrice' placeholder='10000' />


        <label htmlFor='sellDay'>매도 일</label>
        <input value={sellDay ||""}onChange={handleInputChange} type='date' id='sellDay' name='sellDay'/>

        <label htmlFor='buyPrice' >매도 금액</label>
        <input value={sellPrice || ""} onChange={handleInputChange} type='number' id='sellPrice' name='sellPrice' placeholder='20000' />

        <input type="submit" value={id ? "수정" : "저장" } />
      </form>
    </div>
  );
}

export default AddEdit
