// const Categories = ({ categories, toggleCategory }) => {
//     return (
//       <View>
//         <Text style={styles.title}>Categories</Text>
//         <View style={styles.listContainer}>
//           {categories.map((item) => (
//             <CheckBox
//               key={item.id}
//               label={item.title}
//               checked={item.selected}
//               onPress={() => toggleCategory(item.id)}
//             />
//           ))}
//         </View>
//       </View>
//     );
//   };
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '../../components/checkBox';

const Categories = ({ categories, toggleCategory }) => {
        return (
          <View>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.listContainer}>
              {categories.map((item) => (
                <CheckBox
                  key={item.id}
                  label={item.title}
                  checked={item.selected}
                  onPress={() => toggleCategory(item.id)}
                />
              ))}
            </View>
          </View>
        );
      };

export default Categories

const styles = StyleSheet.create({})