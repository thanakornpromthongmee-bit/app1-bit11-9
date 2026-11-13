//นำเข้า {วิว , ข้อความ} จาก ชื่อไลบารี่
import { Background } from 'expo-router/build/react-navigation/index.js';
import { Image, StyleSheet, Text, View } from 'react-native';

//(หน้าขาวๆ) exportส่งออก defaultเริ่มต้น functionฟังก์ชั่น Appชื่อฟังก์ชั่น 
export default function App(){
  return(
    <View style={homeStyle.container}>


    {/* ใส่ภาพจากไฟล์ */}
    <Image
     source={require('@/assets/miw.jpg')}
     style={{
      width: 200, //กว้าง
      height: 200 , //สูง
      borderRadius: 400 , //โค้ง
      borderWidth: 10 , 
      borderColor: "black" ,
     }}
   />

      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>Thanakorn Promthongmee</Text>
       <Text>ท้ายรักเมีย</Text>

  <View style={homeStyle.ga}>
     <Text style={{margin: 5}}> ห้อง BIT.1/1 เลขที่ 9 </Text>
     <Text style={{margin: 5}}> Email: thanakorn.promthongmee@e-tech.ac.th </Text>
     <Text style={{margin: 5}}> Phone: 08x-xxx-xxxx </Text>
     
      </View>

  <Text style={{fontSize: 25 , fontWeight: 700 , margin: 5}}>ภาพกิจกรรม</Text>

   <View style={{flexDirection: "row"}}>

   {/* ใส่รูปจากเว็ป */}
   <Image
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROi0SusvtxNEdMf-0dteuuyIGCn3lIlLwqbiinKZfrcg&s=10"}}
    style={{
      width: 120, //กว้าง
      height: 120 , //สูง
      borderRadius: 20 , //โค้ง
      margin: 5
     }}
   />

     <Image
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJL7t6ItdWWUOBIJFgwIb0hj0uFPC_xqculXYamf3PQ&s=10"}}
    style={{
      width: 120, //กว้าง
      height: 120 , //สูง
      borderRadius: 20 , //โค้ง
      margin: 5
     }}
   />

     <Image
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTLpIdC1yZB_RisvV95DjeTF1jkWh_NrS4C86-xqlJA&s=10"}}
    style={{
      width: 120, //กว้าง
      height: 120 , //สูง
      borderRadius: 20 , //โค้ง
      margin: 5
     }}
   />

   </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
  const homeStyle = StyleSheet.create({
    container:{
      backgroundColor: "white" ,
      flex:1 , //ขยายพื้รที่
      alignItems: "center" ,
      justifyContent: "center"
    },
    title:{
      color: "black" , // สีอักษร
      fontSize: 32 , //ขนาดอักษร
      fontWeight: 700 , // ความหนาอักษร 100-900
      fontStyle: "italic" , //เสียง
      textAlign: "center"
    },

    ga:{ 
    backgroundColor: "#d1d1d1" , 
    padding: 10 ,
    margin: 20,
    width: 400,
     borderRadius: 10 ,
    }
  })
