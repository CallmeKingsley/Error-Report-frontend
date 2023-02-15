
import Arrow from './arrow.png'

export function TableHeader (){
    return(
       <div style={{display: 'flex', flexDirection: 'row', width: 1200, backgroundColor: '#d47857', justifyContent: 'space-between'}}>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#d47857', justifyContent: 'center', alignItems: 'center'}}>
             <h3 style={{color: '#fff',fontSize: 16,fontWeight: 'bold'}}>Recorded Date</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#d47857',justifyContent: 'center', alignItems: 'center'}}>
             <h3  style={{color: '#fff',fontSize: 16,fontWeight: 'bold'}}>User id</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#d47857',justifyContent: 'center', alignItems: 'center'}}>
             <h3  style={{color: '#fff',fontSize: 16,fontWeight: 'bold'}}>isFatal</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#d47857',justifyContent: 'center', alignItems: 'center'}}>
             <h3  style={{color: '#fff',fontSize: 16,fontWeight: 'bold'}}>Error Type</h3>
          </div>
          <div style={{ width: 200, height: 60,display: 'flex', backgroundColor: '#d47857',justifyContent: 'center', alignItems: 'center'}}>
             <h3 id='pointer' style={{color: '#fff',fontSize: 16,fontWeight: 'bold'}}>Platform</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#d47857',justifyContent: 'center', alignItems: 'center'}}>
          </div>
       </div>
    )
}

export function TableBody (data){
   console.log('----',data)
    const { dateCreated,errorType,isFatal,platform,userId } = data.data
    return(
       <div style={{display: 'flex', flexDirection: 'row', width: 1200,backgroundColor: '#e6e7e8',  justifyContent: 'space-between', borderBottom: `1px solid black`}}>
          <div style={{ width: 180, height: 60,display: 'flex',backgroundColor: '#e6e7e8',  justifyContent: 'center', alignItems: 'center'}}>
             <h3 style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>{dateCreated}</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex',backgroundColor: '#e6e7e8',justifyContent: 'center', alignItems: 'center'}}>
             <h3  style={{color: '#000', fontSize: 14}}>{userId}</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#e6e7e8',justifyContent: 'center', alignItems: 'center'}}>
             <h3  style={{color:  '#000', fontSize: 14}}>{isFatal.slice(0, 20)}</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#e6e7e8',justifyContent: 'center', alignItems: 'center'}}>
             <h3  style={{color:  '#000', fontSize: 14}}>{errorType}</h3>
          </div>
          <div style={{ width: 200, height: 60,display: 'flex', backgroundColor: '#e6e7e8',justifyContent: 'center', alignItems: 'center'}}>
             <h3 id='pointer' style={{color:  '#000', fontSize: 14}}>{platform.slice(0, 20)}</h3>
          </div>
          <div style={{ width: 180, height: 60,display: 'flex', backgroundColor: '#e6e7e8',justifyContent: 'center', alignItems: 'center'}} onClick ={() => data.arrowPressed(data.data)} >
             <img src={Arrow} style ={{ height: 25, widows: 25}} alt="Logo"/>
          </div>
       </div>
    )
}