import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { data } from "./data";
import{ IMAGENAME } from '../../../assets/image';
import { Image } from "react-native";


export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaBox>
      <ScrollView>
        <View style={homeScreen.rootContainer}>
          <WelcomeCard />
          <Text style={homeScreen.title}>Savol</Text>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            renderItem={({ item, index }) => (
              <HomeCard
                title={item.title}
                image={item.image}
                numOfQuestions={item.numOfQuestions}
                duration={item.duration}
                index={index}
                onPress={() => {
                  navigation.navigate("Test", {
                    title: item.title,
                    testName: item.testName,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <View style={welcomeCard.root}>
         <View style={{ flex: 1, alignItems:"center", justifyContent:"space-around", flexDirection:"column",}}>
          <View>
            <Image source={ IMAGENAME } style={styles.tinyLogo} />
          </View>
          <View>
            {/* <Heading text="UzFi" fontSize={24} color="#fafafa" /> */}
          </View>
         </View>
      <Text style={welcomeCard.text}>Hoiii</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

const homeScreen = StyleSheet.create({
  rootContainer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#525252",
  },
});

const welcomeCard = StyleSheet.create({
  contaner: {
    flex: 1,
    flexDirection: "row",
  },
  root: {
    backgroundColor: "#4B5563",
    gap: 5,
    borderRadius: 24,
    padding: 24,
  },
  heading: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#fafafa",
    fontWeight: "500",
  },
});
