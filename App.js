import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function App() {
  return (
    <ScrollView style={{
      backgroundColor: "#1B1C1D"
    }}>
      <StatusBar barStyle="light-content" />
      <View style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#FFF",
          letterSpacing: 5
        }}>Oreo</Text>
        <Ionicons name="search" size={24} color="#FFF" />
      </View>

      <View style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20
      }}>
        <Text style={{
          color: "gray",
          fontWeight: "bold",
          textDecorationLine: "underline",
          textDecorationColor: "#FFF"
        }}>all products</Text>
        <Text style={{
          color: "gray",
          fontWeight: "bold",
          textDecorationLine: "underline",
          textDecorationColor: "#FFF"
        }}>ice cream</Text>
        <Text style={{
          color: "gray",
          fontWeight: "bold",
          textDecorationLine: "underline",
          textDecorationColor: "#FFF"
        }}>cups</Text>
        <Text style={{
          color: "gray",
          fontWeight: "bold",
          textDecorationLine: "underline",
          textDecorationColor: "#FFF"
        }}>oreo</Text>
      </View>

      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 70
      }}>
        <View>
          <Image style={{
            width: 250,
            height: 300,
            resizeMode: "contain"
          }} source={require('./assets/ice.png')} />
        </View>
        <View style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Text style={{
              color: "yellow",
              fontWeight: "bold",
              marginRight: 10
            }}>Favorite</Text>
            <Ionicons name="heart-outline" size={24} color="yellow" />
          </View>
          <Ionicons style={{
            marginTop: 20
          }} name="bookmark-outline" color="#FFF" size={24} />
          <Ionicons style={{
            marginTop: 20
          }} name="send-outline" color="#FFF" size={24} />
          <Text style={{
            color: "gray",
            marginTop: 70
          }}>10 in storage</Text>
          <Text style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 25,
            marginTop: 5
          }}>$ 5 <Text style={{
            color: "#FFF",
            fontSize: 15
          }}>.30</Text> </Text>
        </View>
      </View>

      <View style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginHorizontal: 20,
        backgroundColor: "black",
        borderRadius: 12,
        padding: 15,
        marginTop: 30
      }}>
        <View style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 15
        }}>
          <Ionicons style={{
            marginRight: 30
          }} name="boat-outline" size={24} color="#FFF" />
          <Text style={{
            color: "gray",
            fontWeight: "bold"
          }}>Base ice cream</Text>
        </View>
        <View style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 15
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Ionicons style={{
              marginRight: 20
            }} name="cafe" size={24} color="#FFF" />
            <Text style={{
              color: "#FFF",
              marginRight: 20
            }}>vanila</Text>
          </View>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Ionicons style={{
              marginRight: 20
            }} name="cafe" size={24} color="orange" />
            <Text style={{
              color: "#FFF",
              marginRight: 20
            }}>mix</Text>
          </View>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Ionicons style={{
              marginRight: 20
            }} name="cafe" size={24} color="brown" />
            <Text style={{
              color: "#FFF",
              marginRight: 20
            }}>chocolate</Text>
          </View>
        </View>
      </View>

      <View style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20
      }}> 
        <Ionicons name="arrow-back" size={20} color="#FFF" />
        <View style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          flexDirection: "row",
          backgroundColor: "gray",
          padding: 10,
          borderRadius: 12,
          paddingHorizontal: 20
        }}>
          <Text style={{
            color: "black",
            marginRight: 15
          }}>-</Text>
          <Text style={{
            color: "#FFF",
            marginRight: 15
          }}>2</Text>
          <Text style={{
            color: "#FFF"
          }}>+</Text>
        </View>
        <View style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          flexDirection: "row",
          backgroundColor: "yellow",
          padding: 10,
          borderRadius: 12,
          paddingHorizontal: 20
        }}>
          <Text style={{
            marginRight: 15
          }}>To cart</Text>
          <Ionicons name="lock-closed-outline" color="black" />
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({});
