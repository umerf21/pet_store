import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    width:'45%',
    overflow:'hidden'
  },
  image: {
    width: '100%',
    height: 100,
  },
  info: {
    marginTop:8,
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});