<form onSubmit={handleSubmit}>
        <label>
            Nama Lengkap:
            <input 
                type="text"
                name="nama" 
                // className={styles.input}
                id="nama"
                value = {data.fullname}
                onChange = {handleInput}
                minLength= "2"
                maxLength = "40"
                required
            />
        </label>
        <label>
            Email:
            <input 
                type= "email"
                name="email"
                id="email" 
                // className={styles.input}
                value = {data.email}
                onChange = {handleInput}
                required
            />
        </label>
        <label>
            Nomor Handphone:
            <input 
                type="text" 
                name="phone"
                id="phone"
                className={styles.input}
                value={data.phone}
                onChange = {handleInput}
                minLength= "9"
                maxLength= "14"
                required
            />
        </label>
        <p className={styles.input} >Latar Belakang Pendidikan</p>
        <label>
            IT
            <input 
                type="radio" 
                name="pendidikan"
                // className={styles.input}
                value="IT"
                onChange = {handleInput}
                checked={data.pendidikan === "IT" ? true : false}
            />
        </label>
        <label>
            Non IT
            <input
                type="radio" 
                name="pendidikan"
                // className={styles.input}
                value="NON IT"
                onChange = {handleInput}
                checked={data.pendidikan === "NON IT" ? true : false}
            />
        </label>
        <label className={styles.input}>
            Kelas Coding yang Dipilih:
            <select value={data.kelas} onChange={handleChangeSelectTag} ref={kelasSelect}>    
                <option value="">Pilih Salah Satu Program</option>
                <option value="backend">Coding Backend with Golang</option>
                <option value="frontend">Coding Frontend with ReactJS</option>
                <option value="fullstack">Fullstack Developer</option>
            </select>
        </label>
        <label style={{display: "flex", justifyContent: "center"}}>
            Foto Surat Kesungguhan:
            <input 
                type="file" 
                ref={fotoSampul}
            />
        </label>
        <label>
            Harapan Untuk Coding Bootcamp Ini:
            <textarea
                type="textarea"
                name="pesan" 
                className={styles.input}
                value={data.pesan}
                onChange = {handleInput}
                rows="5"
            />
        </label>
        
        <span className={styles.errorMessage}>{errMsg}</span>
        <input type="submit" value="Submit"/>
        <button onClick={resetData}>Reset</button>
    </form>