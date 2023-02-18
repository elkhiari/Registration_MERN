import React, { useContext } from 'react';
import {Page, Text, View, Document, StyleSheet, PDFViewer,Font,Image, PDFDownloadLink } from '@react-pdf/renderer';
import Poppins_ExtraBold from './font/Poppins-ExtraBold.ttf'
import { UserContext } from '../App';


Font.register({ family: 'Poppins', src: 'https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlEA.ttf'})
Font.register({ family: 'Poppins-ExtraBold', src:Poppins_ExtraBold})

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff', 
  },
  sections: {
    margin: '50px',
    textAlign:'center', 
    padding: 10,
    
  },
  text: {
    fontFamily:'Poppins-ExtraBold',
    fontWeight: 900,
  },
  image:{
    width:'10%',
    top:'50px',
    left:'30px',
    position:'absolute',
  },
  
});



// Create Document Component
function MyDocument(props) {
    const user = props.data
    return (
    <Document>
    <Page size="A4" style={styles.page}>
        <View >
            <Image src="https://react-pdf.org/images/logo.png" style={styles.image} />
        </View>
        <View style={styles.sections}>
            <Text style={styles.text}>confirmation receipt</Text>
        </View>
        <View style={{padding:'10px'}}>
            <View style={{marginTop:'20px',backgroundColor:'rgb(28,100,242,0.5)',borderRadius:'3px',padding:'5px' ,display:'flex',alignContent:'center',fontFamily:'Poppins-ExtraBold',flexDirection:'row',border:'1px solid black',fontWeight:800}}>
                <Text style={{width:'10%' , fontSize:'10'}}>
                    Cnie
                </Text>
                <Text style={{width:'20%' , fontSize:'10'}}>
                    First Name
                </Text>
                <Text style={{width:'20%' , fontSize:'10'}}>
                    Last Name
                </Text>
                <Text style={{width:'30%' , fontSize:'10'}}>
                    Email
                </Text>
                <Text style={{width:'20%' , fontSize:'10'}}>
                    Phone
                </Text>
            </View>
            <View style={{marginTop:'5px',backgroundColor:'#E1EEDD',borderRadius:'3px',padding:'5px' ,display:'flex',alignContent:'center',fontFamily:'Poppins',flexDirection:'row'}}>
                <Text style={{width:'10%' , fontSize:'10'}}>
                    {user && user.cnie}
                </Text>
                <Text style={{width:'20%' , fontSize:'10'}}>
                {user && user.firstName}

                </Text>
                <Text style={{width:'20%' , fontSize:'10'}}>
                {user && user.lastName}

                </Text>
                <Text style={{width:'30%' , fontSize:'10'}}>
                {user && user.email}
                </Text>
                <Text style={{width:'20%' , fontSize:'10'}}>
                {user && user.phone}
                </Text>
            </View>
            <View style={{marginTop:'5px',backgroundColor:'#E1EEDD',borderRadius:'3px',padding:'5px' ,display:'flex',alignContent:'center',fontFamily:'Poppins',flexDirection:'row'}}>
                <Text style={{width:'30%' , fontSize:'10',fontFamily:'Poppins-ExtraBold'}}>
                    Adress
                </Text>
                <Text style={{width:'70%' , fontSize:'10',}}>
                {user && user.adress}
                </Text>
            </View>
        </View>
    </Page>
  </Document>
)};

export default function PDfDownloadBtn(){
    const {user,setUser} = useContext(UserContext)
      return(
      <>
      <PDFDownloadLink document={<MyDocument data={user}  />} fileName={user.cnie+'.pdf'}>
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download</span>
            </button>
      </PDFDownloadLink>
    </>
      )
}

