import React from 'react';
import { Container,Container1, Container2, DetailButton,ContainerImg } from './styled';

const CardSobre = ({img}) => {
    return (
        <Container>
            <Container1>
                <ContainerImg>
                    <img src={img} alt="Imagem do autor"/>
                </ContainerImg>
            </Container1>
            <Container2>
                <h1>Bruno Dahlem Pereira</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et dictum nibh, vitae laoreet sapien. Morbi quis congue ligula, sed imperdiet urna. Nulla tincidunt porta massa id mattis. Phasellus consequat dignissim ante, ut maximus nisi ultrices ac. Nam a augue eu tortor fermentum suscipit vitae et eros. Cras eu sapien tristique, aliquam lacus et, lacinia arcu. Suspendisse non urna in ante gravida interdum. Mauris quis urna nec erat efficitur gravida. Donec ac pharetra odio. Donec nisl orci, faucibus sed posuere sed, fringilla ut augue. Etiam tortor ipsum, mattis a varius fringilla, eleifend et eros. Mauris congue, diam vitae dictum mattis, sapien ex commodo nulla, et pharetra tellus elit at augue. Quisque nec velit lobortis, malesuada odio quis, facilisis mauris. Mauris molestie volutpat felis, a molestie ante dignissim et. Phasellus aliquet mauris a nulla accumsan, sed condimentum lacus laoreet. Sed sed mauris nec eros rhoncus interdum.

Maecenas nulla tortor, tristique a euismod sed, ultrices quis ipsum. Quisque et metus libero. Donec bibendum semper felis, sit amet auctor massa ultrices vitae. Donec id nibh suscipit augue ullamcorper varius ac vel orci. Ut eu urna ac turpis egestas ultrices. Nullam rhoncus dictum congue. Proin nisl quam, congue sed ligula ut, volutpat luctus purus. Mauris consequat, dolor a efficitur accumsan, libero mi vestibulum augue, nec commodo mauris mauris sit amet est. Vivamus tortor est, condimentum ac nulla vitae, pharetra accumsan lorem. Vestibulum auctor felis sit amet feugiat congue. Sed ut nibh nec sem sollicitudin rutrum. Suspendisse potenti. Proin eu vehicula ipsum. Nulla orci odio, pulvinar eget tempus vel, fringilla non lorem. Proin lorem neque, hendrerit sit amet nibh in, cursus sodales quam.</p>
            </Container2>
        </Container>
    );
}

export default CardSobre;