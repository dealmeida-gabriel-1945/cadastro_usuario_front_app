import React from "react";
import {
    View, Text,
    SafeAreaView, ScrollView, RefreshControl
} from "react-native";
import {connect} from "react-redux";
import {updateUsuarios} from "../../service/redux/actions/usuario.actions";
import {UsuarioService} from "../../service/usuario.service";
import {Pagination} from "../../model/pagination.model";
import {DataTable} from "react-native-paper";
import {FlexStyle} from "../../style/flex.style";
import {PositionStyle} from "../../style/position.style";
import {PaddingStyle} from "../../style/padding.style";
import {CustomHeader} from "../../components/custom-header.component";
import {MarginStyle} from "../../style/margin.style";
import {ActivityIndicatorComponent} from "../../components/activity-indicator.component";

class UsuarioListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: (props.usuarios)? props.usuarios.usuarios : [],
            navigation: props.navigation,
            pagination: new Pagination(),

            isLoading: false,
        };
    }

    componentDidMount() {
        this.buscaPage();
    }

    buscaPage(){
        this.setLoading(true);
        UsuarioService.listUsuario(this.state.pagination)
            .then(response => {
                this.updatePagination('totalElements', response.data.totalElements);
                this.setState({areas: response.data.content})
                this.props.dipatchUpdateUsuario(response.data.content);
            }).catch(erro => alert(`${ErrorHandler.getTitle(erro)} \n ${ErrorHandler.getMessage(erro)}`))
            .finally(() => this.setLoading(false))
    }

    render() {
        if(this.state.isLoading) return <View style={[PaddingStyle.makePadding(10,10,10,10), FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}><ActivityIndicatorComponent /></View>
        let {pagination, isLoading} = this.state;
        return(
            <>
                <CustomHeader drawerNavigation={this.state.navigation}/>
                <SafeAreaView style={FlexStyle.makeFlex(1)}>
                <ScrollView
                    contentContainerStyle={FlexStyle.makeFlex(1)}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => this.buscaPage()}
                        />
                    }
                >
                    <View stle={[MarginStyle.makeMargin(10,10,10,10)]}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>#</DataTable.Title>
                                <DataTable.Title>Nome</DataTable.Title>
                                <DataTable.Title>Data Nascimento</DataTable.Title>
                                <DataTable.Title>Ações</DataTable.Title>
                            </DataTable.Header>
                            {this.renderRows()}
                            <DataTable.Pagination
                                page={pagination.page}
                                numberOfPages={Math.floor(pagination.totalElements / pagination.size)}
                                onPageChange={page => {
                                    if(!pagination.totalElements) return;
                                    this.setState({pagination: pagination.setField('page', page)})
                                    this.buscaPage();
                                }}

                                label={`${(pagination.page * pagination.size) + 1}-${(pagination.page * pagination.size) + pagination.size} de ${pagination.totalElements?pagination.totalElements: 0}`}
                            />
                        </DataTable>
                    </View>
                </ScrollView>
            </SafeAreaView>
            </>
        );
    }

    renderRows() {
        let {usuarios} = this.state;
        return (!usuarios || (usuarios.length === 0))
            ? (
                <DataTable.Row key={1}>
                    <DataTable.Cell>Nenhum dado encontrado!</DataTable.Cell>
                </DataTable.Row>
            )
            : usuarios.map(
                usuario => (
                    <>
                        <DataTable.Cell>{usuario.id}</DataTable.Cell>
                        <DataTable.Cell>{usuario.nome}</DataTable.Cell>
                        <DataTable.Cell>{usuario.dataNascimento}</DataTable.Cell>
                        <DataTable.Cell>{usuario.dataNascimento}</DataTable.Cell>
                    </>
                )
            );
    }

    updatePagination(field, value){
        this.setState({
            pagination: this.state.pagination.setField(field, value),
        });
    }
    setLoading(loading){
        this.setState({isLoading: loading});
    }
}

const myMapDispatchToProps ={
    dipatchUpdateUsuario: updateUsuarios,
};
const mapStateToProps = state => {
    const {usuarios} = state;
    return {usuarios};
}
//currying
export default connect(mapStateToProps, myMapDispatchToProps)(UsuarioListPage);
