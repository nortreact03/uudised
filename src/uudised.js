async function loeUudised() {
    const space_id = 'bpunr3pmp2t5'
    const environment_id = 'master'
    const access_token = 'BdedlpaYC92jTQLf-E6LjmxQT5J-2Fs5f7-Qsu_bCIM'
    const apiUrl = 'https://cdn.contentful.com'

    const apiAadress = `/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}`

    const result = await fetch(apiUrl + apiAadress)
    const andmed = await result.json()

    console.log('All fetched data');
    console.log(andmed);

    const kasOnOtsitavItem = (otsitavTyyp, item) => {
        //otistavTyyp parameetri väärtusteks ootame "autor" või "postitus"
        //item on contenfuli poolt tagastud item
        //funktsioon tagastab true kui otsitavTyyp on itemi tüüp
        const itemType = item.sys.contentType.sys.id
        return otsitavTyyp === itemType
    }

    //loome piltide objekti
    const _images = andmed.includes.Asset.map((a) => ({
        imageUrl: a.fields.file.url,
        id: a.sys.id
    }));

    const images = {}
    _images.forEach(element => {
        images[element.id] = element.imageUrl
    });

    console.log(images)

    //filtreerime välja autorid ja loome neist andmete objekti
    const authors =  andmed.items
    .filter((item) => kasOnOtsitavItem('autor', item))
    .map((element) => ({
        nimetahed: element.fields.nimethed,
        nimi: element.fields.nimi,
        id: element.sys.id   
    }))
    console.log(authors)

    //filtreeri välja postitused ja loo neist massiiv
    const blogPosts = andmed.items
    .filter((item) => kasOnOtsitavItem('postitus', item))
    .map((element) => ({
        author: element.fields.autor.sys.id,
        date: element.fields.kuupaev,
        headerImage: images[element.fields.paisepilt.sys.id],
        title: element.fields.pealkiri,
        blurb: element.fields.sisukokkuvte,
        content: element.fields.sisu,
        id: element.sys.id,

    }))
    console.log(blogPosts)

    // tagastame nii autorite objekti kui ka postituste massiivi
    return {authors, blogPosts}
}

export {
    loeUudised
}