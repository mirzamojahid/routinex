import React from 'react'
import '../../styles/generate.css'
import FacultyListSearch from '../../components/FacultyListSearch';

function Genrate() {

    


    const teacherx = [
        "Md. Fokhray Hossain (MFH)",
        "Mr Mahmudul Hasan (MH)",
        "Dr. Syed Akhter Hossain (SAH)",
        "Dr. Touhid Bhuiyan (DTB)",
        "Mohammad Ismail Jabiullah (MIJ)",
        "Dr. Sheak Rashed Haider Noori (SRH)",
        "Monzur Morshed (MM)",
        "Dr. S M Aminul Haque (SMAH)",
        "Zahid Hasan (ZH)",
        "Nazmun Nessa Moon (NNM)",
        "Fizar Ahmed (FZA)",
        "Md. Aqur Rahman (ATR)",
        "Md Taimur Ahad (MTA)",
        "Naznin Sultana (NS)",
        "Narayan Ranjan Chakraborty (NRC)",
        "Arif Mahmud (AM)",
        "Subhenur Laf (SL)",
        "Md. Sadekur Rahman (SR)",
        "Fahad Faisal (FF)",
        "Abdus Saar (AS)",
        "Shah Md.Tanvir Siddiquee (SMTS)",
        "Moushumi Zaman Bonny (MZB)",
        "Fourcan Karim Mazumder (FKM)",
        "Raja Tariqul Islam (THT)",
        "Md. Abbas Ali Khan (AAK)",
        "Tania Khatun (TK)",
        "Sazzadur Ahamed (SZ)",
        "Faisal Imran (FI)",
        "Saiful Islam (SI)",
        "Taslima Ferdous Shuva (TFS)",
        "Mohammad Monirul Islam (MMI)",
        "Amatul Bushra Akhi (ABA)",
        "Sharmin Akter (SNA)",
        "Dewan Mamun Raza (DMR)",
        "Fatema Tuj Johora (FTJ)",
        "Shayla Sharmin (SS)",
        "Md. Sabab Zulfiker (MSZ)",
        "Amit Chakraborty Chhoton (ACC)",
        "Mushfiqur Rahman (MUR)",
        "Md. Hafizul Imran (MHI)",
        "Tapasy Rabeya (TRA)",
        "Aliza Ahmed Khan (AAKN)",
        "Zerin Nasrin Tumpa (ZNT)",
        "Mohammad Jahangir Alam (MJA)",
        "Refath Ara Hossain (RAH)",
        "Firoz Hasan (FH)",
        "Md. Aynul Hasan Nahid (AHN)",
        "Nishat Sultana (NIS)",
        "Isha Nowrin (IN)",
        "Lamia Rukhsara (LR)",
        "Israt Jahan (IJN)",
        "Zakia Sultana (ZS)",
        "Sharun Akter Khushbu (SAK)",
        "Abu Kaisar Mohammad Masum (KMM)",
        "Md. Assaduzzaman (MA)",
        "Amir Sohel (ARS)",
        "Md. Zabirul Islam (MZI)",
        "Fabliha Haque (FHE)",
        "Nahid Hasan (NH)",
        "Md. Ferdouse Ahmed Foysal (FAF)",
        "Johora Akter Polin (JAP)",
        "Aal Hossan Sarower (AHS)",
        "Chowdhury Abida Anjum Era (CAA)",
        "Md. Mafiul Hasan Man (MHM)",
        "Tanim Ahmed (TA)",
        "Krishno Dey (KD)",
        "Abdullah Al Mamun (AAM)",
        "Partha Dip Sarkar (PDS)",
        "Md. Moynul Hossain (MMH)",
        "Nushrat Jahan Ria (NJR)",
        "Md. Mahedi Hassan (MHS)",
        "Taslima Tabassum (TT)",
        "Faria Nishat Khan (FNK)",
        "Mahimul Islam Nadim (MIN)",
        "Md Umaid Hasan (MUH)",
        "Mayen Uddin Mojumdar (MUM)",
        "Golam Rabbany (GR)",
        "Zahura Zaman (ZZ)",
        "Nasima Islam Bithi (NIB)",
        "Md. Ashraful Islam Talukder (MAIT)",
        "MD. Hasanuzzaman Dipu (MHD)",
        "Md. Ali Hossain (MAH)",
        "Shahadat Hossain (SH)",
        "Dris Saha (DS)",
        "Zannatul Mawa Koli (ZMK)",
        "Md. Monarul Islam (MIS)",
        "Tanvirul Islam (TI)",
        "Md. Nahid Hasan (MNH)",
        "Sultan Mahmud (SM)",
        "Rahmatul Kabir Rasel Sarker (RKR)",
        "Nusrat Khan (NK)",
        "Md Ak Asif Khan Akash (AAKA)",
        "Md. Mubtasim Fuad (MMF)",
        "Mohammad Asifur Rahim (MSRM)",
        "Md. Mizanur Rahman (MMRN)",
        "Umme Ayman (UA)",
        "Md. Shakhawath Hossain (MSHN)",
        "Umme Habiba (UH)",
        "Munira Ferdous (MNF)",
        "Mr. Mohammad Abdul Halim (ALH)",
        "Md. Tazmim Hossain (TH)",
        "K. M. Shahriar Islam (KMSI)",
        "Lameya Islam (LI)",
        "Hasnur Jahan (HJ)",
        "Md. Jakaria Zobair (MJZ)",
        "Sinthia Chowdhury (SCH)",
        "Farjana Akhter (FA-C)",
        "Shahriar Shakil (MSS)",
        "Abu Sufian (ASN)",
        "Md. Arid Hasan (MAHN)",
        "Md. Shovon (MDSH)",
        "Md. Fahad Hossain (FHN)",
        "Md. Hasan Imam Bijoy (MHIM)",
        "Deawan Rakin Ahamed Remal (DRAR)",
        "Onamika Islam (OI)",
        "Mosharraf Hossain Khan (MHK)",
        "Md. Nazmul Islam (MNI)",
        "Zarin Anjuman Sehu (ZAS)",
        "Mst. Mostary Begum (MB)",
        "Sakib Mahmood Chowdhury (SMC)",
        "Nasrin Akter (NAA)",
        "Takowa Rahman (TR)",
        "Jakia Akter (ZA)",
        "Dewan Ashiquzzaman Almas (DAA)",
        "Md. Asif Mahmud Ridoy (MAMR)",
        "Md. Maynul Islam (MMIM)",
        "Mehedi Hasan (MHHN)",
        "Dara Bin Zaid (DBZ)",
        "Nusrat Nabi (NB)",
        "Meherunnesa Tania (MT)",
        "Tasmiah Rahman (TRN)",
        "Md. Rafidul Hasan Khan (RHK)",
        "Tanveer Hasan (THN)",
        "Umme Sanzida Afroz (USA)",
        "Mostak Ahmad (MKA)",
        "Tanvir Rahman (TRR)",
        "Md. Abdul Hye Zebon (MAHZ)",
        "Rashidul Hasan Hridoy (RHH)",
        "Md. Rasedul Islam (MRIS)",
        "Nusrat Sultana (NST)",
        "Md. Rezwanul Islam (MRI)",
        "Md Ziaul Haque Zim (ZHZ)",
        "Khairun Nahar (KN)",
        "Afsana Jerin Shayary (AJS)",
        "Mahmudul Hasan (MH)",
        "Nahida Akter Poly (NAP)",
        "Md. Rafiz Uddin (MRU)",
        "Afroza Akter (AA)",
        "Shipra Mondal (SML)",
        "Mahinur Akther (MA*)",
        "Razia Sultana (RS)",
        "Zannatul Ferdous (ZF)",
        "Dr. Bimal Chandra Das (BCD)",
        "Mohammad Salek Parvez (SP)",
        "Masuma Parvin (MPL)",
        "Mohammad Abdul Halim (MAH*)",
        "Proma Dash (PD)",
        "Dr. Md. Kamrul Hossain (DMKH)",
        "Aa Sanjida Talukder (AST)",
        "Shirin Sultana (SS*)",
        "Mst. Sanjida Afrin (MSA)",
        "Khadijatul Kobra (KK)",
        "Md. Shakib Hossain (MSH)",
        "Farzana Afrin Mim (FAM)",
        "Sujoy Devnath (SD)",
        "Md. Mizanur Rahman (MR)",
        "Md. Mozammelul Haque (MMH*)",
        "Md. Hasibur Rahaman Peash (HRP)",
        "Dr. Sk. Abdul Kader Arafin (AKA)",
        "Mohammed Riaz Rahman Munna (MRRM)",
        "Shahina Haque (SHA)",
        "Md. Yousuf Ali (MYA)",
        "Md. Masum Sarker (MMS)",
        "Farhana Tania (FT)",
        "Md. Mehedi Hasan (MEH)",
        "Sumaiya Begum (SB)",
        "Md. Yousuf Ali (YA)",
        "Nishat Tasnim (NT)",
        "Md. Abedullah (MMA)",
        "Dr. Md.Samaun Hasan (MSH*)",
        "Shakil Ahmed (SA)",
        "Sumaia Akhter (SAA)",
        "Abu Shahed Shah Md Nazmul Arefin (ASNA)",
        "Munmun Shabnam Bipasha (MSB)",
        "Sayeda Maria Rahman (SMR)",
        "Rokunuzzaman Biswas (RB)",
        "Nazmul Huda Azad (NHA)",
        "Abdullah Al Mahmud (AAM*)",
        "Md. Al Imran (AI)",
        "Md. Khaled Sifullah (MKS)",
        "Sonia Akter (SAR)",
        "Md. Salman Sohel (SAS)",
        "Shithee Ahmed (SAH)",
        "Mr. Rokunuzzaman Biswas (RKB)",
        "Professor A. M.M. Hamidur Rahman (HR)",
        "Dr. Liza Sharmin (LS)",
        "Dr. Binoy Barman (BB)",
        "Dr.Mohammed Shamsul Hoque (SH)",
        "Mr. Mohammad Mustafizur Rahman Sameen (MRS)",
        "Ms. Irina Ishrat (IR)",
        "Ms. Nahid Kaiser (NK)",
        "Dr. Md. Mostafa Rashel (MMR)",
        "Ms. Asma Alam (AA)",
        "Mr. Md. Ariful Islam Laskar (MAIL)",
        "Ms. Rabeya Binte Habib (RBH)",
        "Ms. Fatema Begum Laboni (FBL)",
        "Md. Nuruzzaman Moral (NM)",
        "Mr. Mohammad Elius Hossain (MEH)",
        "Mr. Md Abdul Momen Sarker (AMS)",
        "Dr. Ehatasham Ul Hoque Eiten (EHE)",
        "Ms. Afroza Akhter Tina (AAT)",
        "Ms. Shipra Mondal (SM)",
        "Mr. Mohammad Zahidul Islam (MZI)",
        "Mr. Al Mahmud Rumman (AMR)",
        "Md Shohidul Islam Polash (SIP)",
        "Md. Maruf Chand (MMC)",
        "Mr. Md Jihan Parvaj (MJP)",
        "Abdul Muntakin (ALM)",
        "Mr. Mahmudul Islam Rakib (MIR)",
        "Ms Sadia Jannat Mitu (SAJ)",
        "Mansura Akter Mome (MAM)",
        "Ms Faiza Feroz (FFZ)",
        "Mr. Istiaque Ahmed (IAD)",
        "Durjoy Bhowmik (DJB)",
        "Gayatri Rani Sarker (GRS)",
        "Chayti Saha (CSA)",
        "Md. Roni Islam (RIM)",
        "Md. Suzauddulah (SDH)",
        "Md. Al-Mamun (AMN)",
        "Tania Akter Asa (TAA)",
        "Mr. Abdus Sattar (AS)",
        "Afsana Begum (ABM)",
        "Avizit Nandi (ATN)",
        "Md. Emad Hossain Likhon (EHL)"
    ];


    const coursex = ["Digital Image Processing", "Big Data & IoT", "Big Data & IoT Lab", "Software Engineering", "Algortithm", "Algorithm Lab"];



    return (


        <div >

            <FacultyListSearch></FacultyListSearch>

{/* 
            <div id='generate_container' className='flex jy_sb'>

                <div className='generate-item'>
                    <h3>Teacher List</h3>
                    <div>
                        {teacherx.map((e) => {
                            return (<div className='g_item flex an_center'>{e}</div>)
                        })}
                    </div>
                </div>

                <div className='generate-item'>
                    <h3>Offer Course List</h3>
                    <ol>
                        {coursex.map((e) => {
                            return (<li className='g_item flex an_center'>{e}</li>)
                        })}
                    </ol>
                </div>

                <div className='generate-item'>
                    <h3>Section List</h3>
                    <ol>
                        {batchx.map((e) => {
                            return (<li className='g_item flex an_center'>{e}</li>)
                        })}
                    </ol>
                </div>

                <div className='generate-item'>
                    <h3>Assigned Course</h3>

                </div>

            </div>

 */}


        </div>
    )
}

export default Genrate