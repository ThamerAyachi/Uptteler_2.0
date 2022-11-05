import * as React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import * as Speech from "expo-speech";

export default function NewsScreen(props) {
	Speech.speak("That's what i can found", { language: "en-US" });
	const { articles } = props.route.params;
	let newArticles = [];
	articles.map((a, i) => {
		if (i < 20 && articles.length >= i) {
			newArticles.push(a);
		}
	});

	return (
		<TailwindProvider>
			<ScrollView className="p-3 bg-dr">
				{newArticles.length < 1 ? (
					<Text className="text-gray-400">osber</Text>
				) : (
					<View className="mb-14">
						<View className="">
							<Text className="text-2xl py-5 text-gray-400">
								That's what i can found
							</Text>
						</View>
						<View>
							{newArticles.map((i, index) => {
								return (
									<Card
										key={index}
										img={i.media}
										title={i.title}
										author={i.author}
										date={i.published_date}
										onPress={() =>
											props.navigation.navigate("Article", { article: i })
										}
									/>
								);
							})}
						</View>
					</View>
				)}
			</ScrollView>
		</TailwindProvider>
	);
}
