if(props.state.guser.bloodgrp === 'A+'){
    if(item.bloodgrp === 'A-' || item.bloodgrp === 'O-' || item.bloodgrp === 'A+' || item.bloodgrp === 'O+')
    {
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }   
}else if(props.state.guser.bloodgrp === 'A-'){
    if (item.bloodgrp === 'A-' || item.bloodgrp === 'O-'){
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }
}else if(props.state.guser.bloodgrp === 'O-'){
    if (item.bloodgrp === 'O-'){   
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }


}else if(props.state.guser.bloodgrp === 'O+'){
    if (item.bloodgrp === 'O-' || item.bloodgrp === 'O+'){
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }
}else if(props.state.guser.bloodgrp === 'B-'){
    if (item.bloodgrp === 'O-' || item.bloodgrp === 'B-'){
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }
}else if(props.state.guser.bloodgrp === 'B+'){
    if (item.bloodgrp === 'O-' || item.bloodgrp === 'O+' || item.bloodgrp === 'B-' || item.bloodgrp === 'B+' ){
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }
}else if(props.state.guser.bloodgrp === 'AB+'){
    if (item.bloodgrp === 'O-'  ||
        item.bloodgrp === 'O+'  ||
        item.bloodgrp === 'B-'  || 
        item.bloodgrp === 'B+'  ||
        item.bloodgrp === 'A-'  || 
        item.bloodgrp === 'A+'  || 
        item.bloodgrp === 'AB-' || 
        item.bloodgrp === 'AB+' ){
        return <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> 
    }
}else if(props.state.guser.bloodgrp === 'AB-'){
    if (item.bloodgrp === 'O-' || 
        item.bloodgrp === 'B-' || 
        item.bloodgrp === 'AB-' || 
        item.bloodgrp === 'A-' ){
        return item.bloodgrp !== props.state.guser.bloodgrp?
        <>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
        <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
             <Thumbnail source={{uri:item.photo,}} resizeMode="contain" style={{height:50,marginRight:10}}/>
            <Text>{item.name}</Text>

            <Text style={{marginLeft:'auto',marginRight:10}}>{item.bloodgrp}</Text>


            </ListItem> 
            </TouchableOpacity>
            <Separator style={{height:15}}/> 
            
         </> : null
    }
}else{
    return <Text>No Record Available</Text>
}