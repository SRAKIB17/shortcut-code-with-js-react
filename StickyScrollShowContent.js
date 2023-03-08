import React, { useState } from 'react';
import { useEffect } from 'react';
const link = [
    {
        id: 'client',
        title: 'Client'
    },
    {
        id: 'business',
        title: 'Business'
    },
    {
        id: 'candidate',
        title: 'Candidate'
    }
]

const StickyScrollShowContent = () => {

    useEffect(() => {
        const scroll = []
        link.forEach(l => {
            const currentId = document.getElementById(l?.id);
            const id = l?.id
            const height = currentId?.clientHeight;
            const offsetTop = currentId?.offsetTop;
            scroll.push({ id: id, height: height, offsetTop: offsetTop })
        });

        window.onscroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const find = scroll?.find(si => {
                const id = document.getElementById("link-" + si?.id);
                id.style = ''
                return si?.offsetTop <= winScroll && (si?.height + si?.offsetTop) >= winScroll
            })
            const id = document.getElementById("link-" + find?.id)

            try {
                id.style.color = 'red'
            }
            catch {

            }
        }
    }, [])
    return (
        // <section className='bg-[#EBEBEB] h-screen sticky top-0 grid grid-cols-12 z-50 '>
        // <section className='bg-[#EBEBEB] h-screen grid sticky grid-cols-12 z-50 '>
        <section className='grid grid-cols-12'>
            <div className=' flex w-full col-start-2 col-end-12'>
                <div className=' h-screen sticky top-0 w-[40%] flex justify-center items-center flex-col'>
                    <h1>
                        WHY Collabtalent
                    </h1>
                    <div className='flex flex-col gap-4'>
                        {
                            link?.map((l, index) => {
                                return (
                                    <a href={"#" + l?.id} className='text-4xl 2xl:text-6xl block text-[#1E66D2] font-[Spitzkant]' id={'link-' + l?.id} key={index}>
                                        {
                                            l?.title
                                        }
                                    </a>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='w-[60%]'>
                    <div id='client'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum, tempora aperiam animi error molestias minus voluptatibus ea consectetur qui aut harum eius iure cumque dicta labore illum consequatur vel?
                        Eos possimus aliquam laboriosam quod facere natus tempore, quae eaque vel placeat cumque iure labore eligendi velit officia nesciunt ab adipisci. Maiores illo ipsam dicta. Deleniti incidunt blanditiis labore voluptatum?
                        Accusantium voluptas nemo amet numquam cumque facilis doloribus consectetur voluptatibus eius at. Saepe aliquid blanditiis error, sint eos nisi mollitia enim repudiandae eaque? Expedita officiis molestias, veniam fugit nostrum numquam?
                        Aut, nobis numquam. Quam eos tempore, atque nostrum maxime minus consequatur, suscipit quo nulla temporibus architecto. Ex eligendi minima inventore error neque delectus odit, molestiae aliquid iusto illo vero recusandae.
                        Delectus, cumque maxime. Hic iure adipisci dolore corporis neque corrupti temporibus. Nesciunt unde suscipit sunt perferendis esse, in repudiandae impedit numquam ab accusamus hic omnis, nihil iste quod rem soluta.
                        Inventore iste suscipit ut dolor non impedit ipsum assumenda! Facilis quaerat error suscipit et repellendus consequatur ea molestiae consectetur odit, nisi tempora hic fugit perferendis dolorem, a nobis dolores vero.
                        Expedita laboriosam quas voluptate quis quisquam numquam enim dolorum corrupti officiis ratione. Mollitia debitis accusamus dolore quia, voluptatum, obcaecati ab dolores harum tempore aspernatur optio omnis autem, reprehenderit illo neque!
                        Consequuntur autem ea iste ab harum et dolore? Veritatis quia veniam cumque explicabo temporibus aut facilis, debitis accusamus, maiores possimus adipisci libero itaque quae illo alias sint dolorem in nisi.
                        Obcaecati amet iusto quam repudiandae ipsam sit omnis, non vitae ratione atque dicta inventore dolor corrupti voluptatibus tempore, exercitationem cum quae minus sunt. Fugiat modi magni sapiente, dolore omnis molestiae!
                        Unde incidunt porro voluptatibus eius amet consequuntur voluptatum excepturi cum doloremque mollitia velit debitis omnis dignissimos explicabo laudantium obcaecati sapiente, totam, accusamus quas ducimus? Suscipit molestiae harum ab libero provident.
                        Ab laudantium porro delectus in veritatis commodi dolorum nihil accusamus! Vero, similique ratione blanditiis autem error aspernatur molestiae consequuntur earum ipsam assumenda, dolorem, sapiente culpa atque quo deserunt placeat eligendi?
                        Aperiam, quam quibusdam eaque quis quaerat voluptatem! Aliquid itaque ullam praesentium dolor quaerat earum vitae aperiam dignissimos, architecto ex unde ad autem voluptatem eos omnis suscipit aspernatur nihil dolorum eaque.
                        Nam eaque placeat iure molestias itaque, voluptate laborum minima explicabo officiis exercitationem doloribus sed eligendi quos enim, eveniet consequatur quae repudiandae odit veniam at commodi animi rem. Ipsam, repellendus quaerat?
                        Exercitationem aut iusto nemo sunt quod at fugiat omnis similique saepe esse? Quod blanditiis maxime obcaecati explicabo laboriosam labore officiis suscipit sit? Dicta temporibus, adipisci soluta dignissimos mollitia pariatur illo?
                        Quisquam facere consequuntur sint, mollitia debitis magnam rem aperiam ducimus consequatur consectetur iusto quaerat dolorem numquam deleniti perferendis vitae ipsa atque! Quis perferendis eum voluptatum necessitatibus nihil saepe itaque nisi!
                        Pariatur ullam eum consequatur cum molestias totam numquam magni minima, porro laborum neque, maxime ipsam aliquam praesentium mollitia! Qui maxime quisquam odio, necessitatibus similique mollitia corrupti nihil pariatur reiciendis architecto.
                        Fugiat quidem aspernatur non accusantium voluptates cum temporibus quisquam ratione libero quae corrupti porro assumenda vel consequatur nostrum numquam dicta ipsum nisi alias quod sit amet, minus adipisci officiis. Cum.
                        Maiores quo sequi nemo cum tempora mollitia, harum reprehenderit dolorum consectetur molestias autem aspernatur iusto esse ipsum cumque labore. Ab esse nulla soluta laborum eos? Fugiat amet ducimus nesciunt aperiam!
                        Ea, repudiandae earum nulla sapiente tempora voluptatibus facilis excepturi ratione maiores neque. Eveniet laudantium id illum maxime at cumque reiciendis repellendus animi praesentium incidunt ducimus qui excepturi, consectetur sit ratione!
                        Labore earum quod assumenda nesciunt eum, quis dolorum fugiat mollitia iste vel maiores laboriosam aut error. Mollitia, minima natus incidunt tempora sed qui? Dignissimos inventore cum nemo labore placeat nisi.
                        Impedit placeat aliquid ullam ipsa suscipit quia consectetur. Inventore quasi nesciunt possimus doloribus placeat neque voluptate fuga impedit, tenetur quam a iste repudiandae voluptas quaerat, veritatis adipisci animi minus ab!
                        Cumque sapiente sint eaque eligendi quisquam ut veniam, sunt nam incidunt autem officia, itaque maxime! Dicta magni nisi, sit atque, nobis sint praesentium quod nam quasi, ex voluptas cum in?
                        Error fuga adipisci quasi inventore, accusamus explicabo minima excepturi non repellat id illum quibusdam cumque exercitationem deleniti eaque animi doloribus sapiente magni dolorem praesentium nesciunt, officiis consequatur perspiciatis. Nam, delectus.
                        Id nostrum esse facilis. Odio unde magni, voluptate dolorum tenetur illo ratione ullam perspiciatis ab veritatis aliquid a modi ea dicta vel quidem distinctio tempore, commodi quas adipisci! Soluta, quasi?
                        Quasi nostrum delectus et saepe quae cum? Delectus non nihil aliquam. Quidem laudantium enim vel veritatis fugit reprehenderit itaque animi at, libero ipsa quia accusantium sequi accusamus cumque. Laboriosam, impedit?
                        Commodi explicabo excepturi adipisci, dignissimos tempore quaerat veritatis dolorum, incidunt deserunt numquam illo quibusdam accusantium! Illum nulla autem doloremque blanditiis accusamus! Sapiente, saepe nostrum temporibus nihil sunt quisquam perferendis laborum.
                        Tempora quibusdam accusantium velit ab sapiente in omnis perspiciatis nemo architecto deserunt? Ut quisquam tenetur dolorum eos aperiam voluptates pariatur dolor tempora inventore perferendis? Ipsam saepe doloribus enim ad beatae.
                        Impedit fugiat enim voluptatem fugit maiores ea aut reprehenderit dicta modi eos cum beatae debitis doloremque quis, rerum veniam facilis similique ut sequi! Eius iste itaque veritatis laborum temporibus. Quidem.
                        Cupiditate, nemo repellendus! Aliquid ea consequuntur sequi sit, commodi recusandae exercitationem necessitatibus est quos. Debitis perspiciatis quo minus quos consequuntur labore, ea modi. Eaque illo ut voluptas officiis qui ea?
                        Corporis similique ratione assumenda ipsam eos illo omnis sunt doloribus accusamus est voluptate, asperiores nobis dolorum sint quidem ipsum, aspernatur neque cupiditate porro necessitatibus nemo. Rerum blanditiis assumenda necessitatibus voluptatum!
                        Itaque non quaerat nulla eligendi iste laudantium tempore, aliquid rem velit ea sequi, placeat perferendis ipsa cumque odio eveniet consequuntur! Qui nesciunt at voluptate placeat error porro quod recusandae veniam.
                        Rerum voluptates nesciunt accusamus rem molestiae reiciendis. Est minus accusantium, veniam impedit quos recusandae libero modi, tempora distinctio error dolore alias aperiam cumque optio quis ratione tenetur autem eligendi ad.
                        Sapiente illo, beatae architecto fuga molestias distinctio. Saepe, itaque quasi dolores voluptatum ducimus alias corrupti exercitationem necessitatibus? Ipsum, numquam doloremque fuga, eveniet praesentium nisi ullam in, rem officia accusamus amet.
                        Aliquam delectus recusandae, ipsum alias magni ipsam natus id aperiam necessitatibus, asperiores optio consequatur veniam maxime ipsa in quae cupiditate! Mollitia magni illo nostrum ex excepturi hic eos officiis. Molestiae.
                        Doloribus libero nam nulla deserunt eos sit quae delectus omnis. Voluptas quas corrupti vitae accusamus aliquam inventore! Ipsum dolorum, sed excepturi libero possimus nostrum totam laboriosam consequuntur quas fugiat facere!
                        Provident quia rem id veritatis asperiores, laboriosam illum explicabo laborum, est consequuntur omnis nam. Et, iusto dolore dicta blanditiis fuga exercitationem vero debitis, minima distinctio praesentium molestias, libero officiis voluptate.
                        Quia ducimus provident laudantium culpa mollitia optio officia, iste dolorem architecto voluptate eos aspernatur perspiciatis expedita quae perferendis ipsa veniam omnis distinctio dolores dolorum praesentium, dicta fuga autem dolor! Omnis.
                        Officia illo quae alias ipsum reprehenderit omnis aliquid obcaecati minima assumenda quaerat unde, explicabo inventore corporis, quisquam voluptatibus, est provident. Deleniti aut quibusdam illo modi culpa libero, cum id quam.
                        Maiores, minima exercitationem ab nemo sint architecto excepturi consequatur id accusantium aliquid placeat aut minus impedit eveniet assumenda velit, hic rerum ipsum explicabo. A vero, ipsa quos iusto placeat ab.
                        Praesentium cupiditate quae expedita nulla ipsam harum dolorum aliquid velit earum reiciendis temporibus ab at consequuntur eaque perferendis a, aspernatur impedit esse quidem voluptatem. Possimus explicabo in nulla. Adipisci, corrupti?
                        Iste ullam provident labore fuga autem? Eligendi ipsam, autem consectetur perferendis adipisci a temporibus et sit nesciunt numquam officiis atque dolores recusandae deleniti iste, magnam repudiandae molestiae? Ducimus, neque exercitationem.
                        Quas soluta voluptatem eligendi omnis amet ratione voluptatibus laborum. Veniam non nisi doloremque minus eum numquam suscipit aliquid rerum ut fugit voluptatibus iusto minima facilis, inventore tempore quo, repudiandae alias?
                        Inventore cumque hic temporibus. Natus aliquam modi, unde odio deleniti nobis quisquam esse. Provident hic sapiente iste illum corrupti. Officia quisquam dignissimos nesciunt at obcaecati perspiciatis quasi, voluptatem itaque velit?
                        Ut error culpa reiciendis esse vel autem cupiditate earum, quam nemo. Veniam suscipit tempora ab vero necessitatibus ipsam numquam magnam enim, veritatis quisquam quo odit, iure eligendi modi animi laboriosam!
                        Rerum optio exercitationem labore? Ad soluta temporibus repellat! Molestiae dolores aut odit quae architecto, tempora facere hic veniam velit eligendi omnis ut placeat laboriosam, in adipisci. Veniam repellendus sit eligendi!
                        Alias blanditiis dicta pariatur architecto consectetur! Sed atque voluptate earum obcaecati ducimus vitae quam nihil. Vitae voluptas inventore dignissimos quas, perferendis unde aliquid obcaecati quia, officia ut veritatis eveniet facilis!
                        Deleniti, necessitatibus rem! Ipsam eius ea aliquam. Fuga enim assumenda doloribus? Nisi voluptatibus sequi, aspernatur sapiente et expedita. Quibusdam nam delectus enim nulla beatae fugit! Porro earum est quod maxime.
                        Impedit repudiandae voluptates, a sed laborum corrupti? Laborum officiis ab, magnam eveniet rerum iure quod tenetur, doloremque id perspiciatis fugiat explicabo, debitis dolores nemo dolorum commodi perferendis sint nulla laudantium.
                        Illo, nam blanditiis reprehenderit aut laborum consequuntur magni architecto soluta sequi numquam quibusdam aspernatur iusto harum reiciendis impedit, ducimus cumque fugit quam sunt voluptatum. Dolor modi aut incidunt corrupti aliquid?
                        Cumque eum quibusdam placeat atque eos odio quidem ratione, omnis labore architecto doloribus itaque tempore aut, asperiores dolorem? Quaerat voluptatem dolores incidunt aliquid labore, pariatur odit in dolorum optio rerum.
                        Quam quis, quod dolorum deserunt esse repudiandae quidem porro eos nam laudantium. Libero itaque fuga eius quae est quaerat illum ut, enim, maiores provident dolore ad culpa ex qui dicta?
                        Perspiciatis delectus praesentium officiis repudiandae et. Saepe nesciunt dignissimos, consequatur aliquid ipsa neque soluta vel, accusantium quod ipsam cupiditate. Nobis facere numquam dolor a iste qui ipsa labore ipsam facilis!
                        Itaque pariatur exercitationem rem impedit consequuntur numquam blanditiis atque ad! Itaque, qui pariatur voluptates ea non aliquid error vel quae nesciunt facilis voluptatem quidem et eos esse labore? Reprehenderit, officia!
                        Similique expedita ratione sapiente culpa aliquid, quidem nobis doloremque quia odio facere, excepturi, blanditiis harum doloribus quod placeat nam ex beatae? Deserunt similique a deleniti non quas eligendi excepturi repudiandae.
                        Sequi architecto labore eaque alias id, voluptate aperiam a animi, libero laborum adipisci illum. Rem, dolorem nulla. Pariatur, aliquid laudantium! Repellendus vero pariatur optio nisi est error sed praesentium sequi.
                        Delectus facilis est dolores a incidunt tempora fugit molestias optio voluptatum. Vitae, laboriosam voluptates ullam aperiam tempora doloremque rerum voluptas id earum est rem blanditiis esse cum obcaecati numquam fugit.
                        Nesciunt esse rerum soluta nam officia maxime fugiat, dignissimos ut exercitationem, accusantium, incidunt dolorum! Doloribus, aspernatur, enim rerum, facilis provident suscipit voluptas quasi pariatur tenetur consectetur assumenda impedit modi nam.
                        Deleniti nesciunt voluptatibus natus laborum numquam sed, at dolorem culpa. Magnam, autem molestiae? Excepturi, omnis voluptatibus, iusto provident rerum id corporis maxime deserunt animi reiciendis delectus eum quas quam inventore.
                        At, repellat? Ex temporibus asperiores, sunt modi eaque necessitatibus. Harum soluta maiores reiciendis blanditiis tenetur molestias? Sint laborum deserunt voluptas eum nemo similique? Molestias consectetur commodi exercitationem. Assumenda, facere illo?
                        Repudiandae atque sint libero suscipit perspiciatis ab quis laborum consequuntur praesentium sunt. Rerum recusandae, impedit repellendus deleniti vel repudiandae totam incidunt reiciendis iusto sapiente temporibus molestiae corporis provident repellat deserunt.
                        Doloremque incidunt, facilis mollitia asperiores perferendis, cumque impedit perspiciatis, quia error labore totam voluptatum accusantium! Dolorum, saepe. Molestiae magni harum ab alias culpa, amet, laboriosam voluptate doloribus omnis corrupti rerum!
                        Dolorem, laborum? Suscipit, officia velit sit, omnis repudiandae autem harum fuga beatae voluptatem iste cupiditate commodi nesciunt nostrum ratione ullam iusto. Velit nihil ducimus minima et cum enim doloremque nulla.
                        Tempore ipsa laborum dolores quia at, optio beatae, distinctio mollitia officiis iure, dolor necessitatibus minima praesentium porro vitae tempora ex deleniti nemo magnam! Repellendus provident sunt eligendi voluptas omnis sed?
                        Ex vero tempore voluptate excepturi nihil ab, sit ipsa ea dignissimos, eligendi molestias cumque sapiente itaque facere labore, in exercitationem? Doloribus fuga provident recusandae voluptate. Cumque aut blanditiis modi doloribus.
                        Iusto recusandae accusantium voluptate, nostrum repellat iure! Earum laboriosam magnam nemo veritatis vel quibusdam dolorem assumenda vitae voluptatum laudantium? Ex, pariatur. Ducimus saepe, tenetur cum obcaecati corporis voluptatibus sequi nulla.
                        Esse asperiores veritatis, dicta facere sequi ad quae quis sit corporis. Dolorum, ratione veritatis illum blanditiis facilis, enim at pariatur ab officia iusto, excepturi nesciunt ipsam molestias porro animi quam.
                        Iste ad molestias eius nobis repellat sit in, officia consectetur unde? Quisquam accusamus suscipit, voluptatibus esse fugiat, laudantium nemo harum incidunt amet tempora hic possimus asperiores voluptatem omnis dolorem. Necessitatibus.
                        Reiciendis earum iure in odio harum deleniti exercitationem incidunt magni quos ad assumenda, tempora consequatur nostrum consequuntur facere quo, similique quam repellat ipsa provident fugiat nemo beatae aut nihil! Unde.
                        Quas, eveniet eos iusto unde perferendis sequi tempore ut ipsa eum cum. Provident, rem quos facere atque officia natus nesciunt dolorum corporis animi sint similique quis, vero laudantium repellendus velit?
                        Magni, esse, exercitationem facere perspiciatis iste error placeat molestias tenetur tempora sequi minima cumque omnis fugiat pariatur et modi obcaecati neque vero a deserunt! Ea, aperiam nesciunt? Reiciendis, minus amet!
                        Error dolor quos ab quod obcaecati odio, ipsam non sit magni cum veniam optio voluptatibus sint, nulla vitae facere nam ducimus. Rerum nobis explicabo porro dolorum autem quisquam voluptatum nemo.
                        Earum provident voluptatibus fuga, quod dolore quae, commodi est asperiores rem eaque in, odio adipisci. Magnam, consectetur veniam unde, eveniet voluptates repellendus quam ipsa aut sunt quisquam commodi culpa pariatur?
                        Nihil officiis corrupti quo beatae possimus! Aspernatur in maiores sint, at quos adipisci libero magnam rerum explicabo aut minus maxime asperiores ea dolore dicta quis eaque delectus ad. Dolorum, delectus.
                        Ea fugit, rem dignissimos quae tenetur culpa iusto cumque, aspernatur ducimus natus quo harum excepturi quis nam, quas doloribus in? Voluptates esse autem fugit vel! Perferendis perspiciatis blanditiis dolorum id.
                        Odio consectetur assumenda, ipsam exercitationem tenetur nobis quo quia voluptates quasi recusandae porro molestiae soluta saepe aliquid iusto. Vitae neque tenetur possimus harum molestias impedit beatae rem repellat ea tempore.
                        Voluptatem in quia enim praesentium similique quam maiores deserunt autem labore voluptatum veritatis dolores et modi distinctio, perferendis rem, aliquid nobis tenetur reprehenderit, odio numquam illo sed omnis. Aspernatur, aliquam?
                        Labore at accusantium provident alias! Nesciunt quasi doloribus, eius modi, nam hic inventore ex eaque saepe cum ab! Dicta beatae, deleniti illum minus obcaecati voluptate voluptates natus voluptatem unde debitis!
                        Quibusdam amet repellendus quas tenetur eum nesciunt deserunt nobis, corporis ipsum distinctio. Asperiores omnis dolorem accusamus nemo saepe eum, veniam voluptas autem, labore, repellat dolores suscipit rem. Expedita, earum eos!
                        Quod incidunt exercitationem modi repellat amet iste, consequuntur, cupiditate quisquam, suscipit nihil beatae recusandae ratione debitis alias earum eos. Accusamus explicabo consectetur tempora possimus consequuntur voluptates necessitatibus, debitis dignissimos exercitationem.
                        Asperiores eum voluptates temporibus sed modi ipsum quas, repellendus enim sapiente, veritatis nam at amet esse? Optio facilis dolor odio commodi quidem sunt rerum est, ut dolore assumenda accusamus recusandae.
                        Eligendi esse nisi repellat obcaecati, magni veritatis veniam sunt laborum dolores excepturi voluptate similique quia blanditiis id expedita doloribus suscipit, a, cumque soluta alias at ad dolor incidunt. Perspiciatis, nihil?
                        Possimus sint pariatur, consequuntur sit rem commodi minus iste, qui modi architecto facilis earum harum quam quos sed eveniet, hic eligendi a repellat eum! Veniam maxime facilis tempore tenetur quos?
                        Possimus ad non quis. Neque reiciendis minima expedita, impedit repellendus architecto sit tempora eius non ex odio magni sapiente itaque? Quidem cum officiis expedita, impedit nesciunt mollitia ex molestias voluptas.
                        Animi odio quos dolores corrupti nostrum incidunt nesciunt, adipisci consequatur beatae eligendi. Veniam corrupti voluptatum quae temporibus delectus odio animi ex maiores expedita magnam, dolores autem labore adipisci tempore consequatur!
                        Nihil hic saepe culpa soluta optio repellat tenetur dignissimos inventore cupiditate laudantium error, incidunt expedita iure dolores odio facere aspernatur obcaecati at quaerat. Ipsam aliquam placeat impedit minima officia odio?
                        Quidem, earum cumque aspernatur suscipit reiciendis eligendi vel nemo voluptate cupiditate tenetur? Eaque quibusdam aperiam quod quidem quisquam mollitia quae quos vel molestias! Adipisci laborum, omnis porro et vitae repellendus!
                        Nam quod nemo adipisci hic eos beatae ipsam. Quo fugiat, minima quam ullam veniam iusto sequi dicta hic saepe molestiae? Quisquam distinctio nemo officia neque molestiae excepturi fugiat eius sequi!
                        Itaque optio veniam exercitationem maiores corporis, quas voluptatibus obcaecati. Ipsa harum officiis nesciunt, at perspiciatis quas et illum, est quasi iste a eius veniam vero vel eum voluptatum magnam explicabo.
                        Odio beatae non sequi suscipit inventore amet quas nemo hic consequatur deleniti. Sapiente ducimus, laborum aliquid dolorum placeat assumenda nesciunt molestias impedit illum quaerat porro commodi, sunt perspiciatis praesentium odit.
                        Facere, at fugiat voluptatum repellat velit quam veritatis odio ea harum totam? Iure ipsam autem, incidunt, eius delectus, est natus deserunt dolores optio laboriosam architecto odio eaque? Quaerat, eos a.
                        Aperiam nam qui, porro voluptatem laborum ex similique repellat nostrum cupiditate ab quos nobis harum maxime accusantium tenetur tempora. Magnam earum dolorem porro nesciunt alias odio id, veritatis obcaecati iste.
                        Minima fugiat, cupiditate incidunt sit labore quia placeat delectus perferendis culpa sed! Beatae, error! Maxime odio iusto vero eaque distinctio maiores non quisquam, debitis minima ipsum numquam quidem fugiat cumque!
                        Facere, vitae, eaque porro ut sit error consequatur expedita, repellat itaque magnam numquam doloremque. Est laborum necessitatibus non, aliquam, eum vitae eaque cumque asperiores, doloribus consequuntur ducimus consequatur odit voluptatem!
                        Autem eius facere nam ad asperiores numquam unde animi nulla? Minima itaque fugiat consectetur iste! Exercitationem, eos! Eum, ipsam possimus! Modi beatae quibusdam animi vero repellat saepe voluptates ex amet!
                        Maiores fugit consequatur voluptates beatae quasi adipisci, reiciendis optio provident fuga aperiam odit ipsa delectus expedita laudantium iste temporibus ad, minus alias iure reprehenderit nostrum eius voluptatum eveniet esse? Omnis?
                        Illum est ipsa provident at aliquid asperiores in neque tempore ratione quod perferendis id dicta numquam quibusdam ullam dolorem nam excepturi, dolor blanditiis tenetur impedit culpa optio! Ipsum, accusantium? Quasi.
                        Nostrum debitis quasi quae quia saepe repellat, odit, quo minima velit illo facere deleniti totam inventore. Culpa, aut. At molestiae tempora dolores. Eius maxime placeat vel? Mollitia rem doloremque facilis?
                        Dolor, error at! Quasi molestiae veniam neque mollitia ratione eveniet quaerat, ducimus reiciendis, ut, incidunt maxime? Libero, harum. Omnis id ipsam alias sed voluptates a tempora voluptas vel exercitationem et!
                        Laudantium praesentium id totam nisi ducimus dignissimos ipsam repellendus labore nihil itaque, maxime possimus, dolor suscipit veritatis quis libero omnis doloribus sapiente non aut harum rem. Ducimus veniam consequuntur eligendi?
                        Ea ut explicabo earum. Nemo unde maiores odit alias voluptatibus maxime quidem explicabo, dolorem inventore dicta animi officiis, vitae debitis saepe, exercitationem voluptatum fugit laudantium reiciendis cum temporibus doloribus sapiente.
                    </div>
                    <div id='business'>

                        [dismiss]
                        Nuvola apps package games.pngThe Wikibooks community has accepted video game strategy guides on this wiki! See Wikibooks:Strategy guides for the newly-created policy on strategy games. We're looking forward to your contributions.
                        Wikibooks:Featured books
                        Jump to navigationJump to search
                        Cscr-featured.svg	Wikimedia Commons logo Nominate a Wikibook
                        Found a wikibook you like? Click this link to nominate it as a featured book.	Related Pages
                        Book List	Nominations	Criteria	Templates
                        Shortcut:
                        WB:FB
                        Featured books are quality books that the community believes to be the best of what Wikibooks has to offer and should inspire people to improve the quality of other books. To nominate one of our Wikibooks, visit the Nominations page. All nominations should meet the minimum criteria to be featured.


                        Contents
                        1	Detailed descriptions of featured books
                        1.1	New featured books
                        1.2	Humanities
                        1.3	Languages
                        1.4	Social sciences
                        1.5	Science, mathematics, and engineering
                        1.6	Computing
                        1.7	Miscellaneous and recreational activities
                        1.8	Wikijunior
                        2	Featured books
                        Detailed descriptions of featured books
                        New featured books
                        Our latest
                        SSH-sequence-password.svg
                        The OpenSSH suite provides secure remote access and file transfer. With the book OpenSSH you can learn how to use the OpenSSH client, server, and key utilities, allowing you to benefit from their extensive capabilities.
                        Image credit
                        edit blurb

                        Linalg triangle formed by two vectors.png
                        Linear algebra is about solving systems of linear equations. The Linear Algebra book helps students master a standard undergraduate linear algebra course — Gaussian reduction, vector spaces, linear maps, determinants, and eigenvalues and eigenvectors — using a developmental approach in which results are proved rather than merely presented.
                        Image credit
                        edit blurb

                        Python-logo-notext.svg
                        This book provides a concise introduction to Python 3.
                        Image credit
                        edit blurb

                        Humanities
                        Visit Department:Humanities to find even more.
                        Europe orthographic Caucasus Urals boundary.svg
                        From Rome to the present day, European History is a sweeping textbook of the continent's history placed in its proper context. Designed for AP European History students.
                        Image credit
                        edit blurb

                        Guitar 1.jpg
                        The Guitar is a stringed musical instrument that is played in many different styles of Western music. This book provides lessons on playing styles and techniques.
                        Image credit
                        edit blurb

                        HP books.png
                        The Muggles' Guide to Harry Potter is a guidebook to the Harry Potter series. Critical commentary on each chapter, character, object, place, and event is provided in an effort to help the reader better understand detailed content and find connections to the greater storyline.
                        Image credit
                        edit blurb

                        HekeFlagstaff.jpg
                        A concise approach to New Zealand History, this textbook covers the first inhabitants, the Maori, the discovery of New Zealand by the Europeans and some of the significant events that have led up to the way the country is in the present day.
                        Image credit
                        edit blurb

                        Languages
                        Visit Department:Languages to find even more.
                        Gaius Julius Caesar (100-44 BC).JPG
                        Latin was the everyday language of the Romans and the basis of Romance languages. Studying Latin will make it easy to learn any such language. As you learn this classical language, you'll connect with Julius Caesar and many other famous Romans. Furthermore, the study of Latin will develop a firm linguistic foundation, bridging the gap between you and some of the greatest writers, scientists, and thinkers.
                        Image credit
                        edit blurb

                        Coat of arms of the Mosquito Monarchy.svg
                        The Miskito language is spoken by nearly 200,000 people in Nicaragua and Honduras. Miskitu Aisas! ("Speak Miskito!") presents the language through graded, user-friendly lessons.
                        Image credit
                        edit blurb

                        Aprovechalo.png
                        The Spanish language is spoken by over 450 million persons worldwide. Join their number with the help of this engaging beginner's textbook.
                        Image credit
                        edit blurb

                        Social sciences
                        Visit Department:Social sciences to find even more.
                        PCExpanion.jpg
                        The Advanced Certificate and the Advanced Diploma in Applications of ICT in Libraries permit library staff to obtain accreditation for their skills in the use of ICT. Anyone can make use of the materials and assessment is available in variety of modes, including distance learning.
                        Image credit
                        edit blurb

                        Nuvola apps edu miscellaneous (no words).svg
                        Blended learning is combining the best of face to face and Web-based technology (e.g., online discussions, self-paced instruction, collaborative learning, streaming video, audio, and text) to accomplish an educational goal.
                        Image credit
                        edit blurb

                        MRI head side.jpg
                        Cognitive Psychology is a psychological science which is interested in various mind- and brain- related subfields such as cognition, the mental processes that underlie behavior, reasoning, and decision making.
                        Image credit
                        edit blurb

                        Pigeon Messengers (Harper's Engraving).png
                        Communication Theory is about transmitting information from one person to another and the ways in which individuals and groups use the technologies of communication.
                        Image credit
                        edit blurb

                        RobertFuddBewusstsein17Jh.png
                        Everyone has his or her own view of the nature of consciousness. The intention of Consciousness Studies is to expand this view by providing an insight into the various ideas and beliefs on the subject as well as a review of current work in neuroscience.
                        Image credit
                        edit blurb

                        IhaveadreamMarines.jpg
                        Elements of Political Communication is a style guide for beginners who want to produce political messages in various media formats. It is not a rule book; rather, it is a set of guidelines to facilitate effective political communication.
                        Image credit
                        edit blurb

                        Europe orthographic Caucasus Urals boundary.svg
                        From Rome to the present day, European History is a sweeping textbook of the continent's history placed in its proper context. Designed for AP European History students.
                        Image credit
                        edit blurb

                        Primate skull series.png
                        Introduction to Paleoanthropology covers the various species and subspecies that gave rise to human beings.
                        Image credit
                        edit blurb

                        Pineapple 230.gif
                        Introduction to Sociology: The first section of this book covers the foundations of sociology, including an introduction to the discipline, the methods of study, and some of the dominant theoretical perspectives. The remaining chapters focus on the different areas of study in sociology.
                        Image credit
                        edit blurb

                        AITC-IL-Germination.jpg
                        Learning Theories is a useful guide for both students and teachers to the problem of how to impart learning.
                        Image credit
                        edit blurb

                        Stas spiacy.1904.jpg
                        Being aware that you are dreaming, and still remaining asleep, can give you the ability to control your dreams. Lucid dreaming truly can be a fantastic experience.
                        Image credit
                        edit blurb

                        Meeting1.jpg
                        Groups are everywhere; whether in our social lives, our work, or even our families, individuals decide to work collectively to achieve particular goals. In Managing Groups and Teams we take a challenge-based approach, one that focuses on the "how" of managing a group or a team.
                        Image credit
                        edit blurb

                        HekeFlagstaff.jpg
                        A concise approach to New Zealand History, this textbook covers the first inhabitants, the Maori, the discovery of New Zealand by the Europeans and some of the significant events that have led up to the way the country is in the present day.
                        Image credit
                        edit blurb

                        SCFAE cover 2nd Ed.jpg
                        Social and Cultural Foundations of American Education is essential reading for US teachers. It was created and edited as part of an education course, ECI 301, at Old Dominion University in Norfolk, VA. The book's primary contributors have been undergraduate, preservice teachers.
                        Image credit
                        edit blurb

                        Redheaded child mesmerized 2.jpg
                        Stuttering, or stammering, is a developmental disorder with several possible causes, and a range of treatments. The Stuttering book is part of a series on Speech-Language Pathology.
                        Image credit
                        edit blurb

                        Westminster.jpg
                        UK Constitution and Government is the perfect introduction for high school lessons on UK government. It is also a quick guide for people of other nations to get some insight into the arcane governance of the UK with its powerless head of state and all powerful House of Commons.
                        Image credit
                        edit blurb

                        Xerox stand in Mumbai.jpg
                        A zine is a do-it-yourself magazine. Learn the techniques involved in creating and distributing your own zines.
                        Image credit
                        edit blurb

                        Science, mathematics, and engineering
                        Visit Department:Science, Department:Mathematics, or Department:Engineering to find even more.
                        Acoustics 1319.jpg
                        Acoustics is the science that studies sound, in particular its production, transmission, and effects.
                        Image credit
                        edit blurb

                        Anatomy and Physiology cover.jpg
                        Veterinary nurses need to have a firm grasp of the normal structure of an animal’s body and how it functions before they can understand the effect diseases and injuries have and the best ways to treat them. Anatomy and Physiology of Animals describes the structure of the animal body and the way in which it works
                        Image credit
                        edit blurb

                        BpnmFrontCover2.jpg
                        Nuclear Medicine is a fascinating application of nuclear physics. The first ten chapters of this wikibook are intended to support a basic introductory course in an early semester of an undergraduate program. Additional chapters cover more advanced topics in this field.
                        Image credit
                        edit blurb

                        Shuttle.svg
                        Control Systems is an inter-disciplinary engineering text that analyzes the effects and interactions of mathematical systems. This book is for third and fourth year undergraduates in an engineering program.
                        Image credit
                        edit blurb

                        Nuvola apps kmplot.svg
                        Engineering Acoustics is the study of the generation and manipulation of sound waves, from an engineering perspective. Requires knowledge of Calculus and Ordinary Differential Equations.
                        Image credit
                        edit blurb

                        Image-Star of life with a gold star.png
                        First Aid covers all topics required for a standard first aid course. The basics covered include: primary assessment, circulatory & respiratory emergencies, internal injuries, and medical conditions. The chapter on advanced topics covers AED operation, oxygen, airway management, and triage.
                        Image credit
                        edit blurb

                        Aristoteles Louvre.jpg
                        Formal Logic is a study of inference with purely formal content. The first rules of formal logic were written over 2300 years ago by Aristotle and are still vital to many modern disciplines like Linguistics and Computer Science.
                        Image credit
                        edit blurb

                        Centerline Rumble Strip.jpg
                        Fundamentals of Transportation is aimed at undergraduate civil engineering students, though the material may provide a useful review for practitioners and graduate students in transportation. The book is divided into three main parts: planning, operations, and design. Find out how an idea becomes a road!
                        Image credit
                        edit blurb

                        DisjointPolygonsSets.svg
                        High School Mathematics Extensions is aimed at, but not limited to, 14 to 18 year olds who are interested in mathematics in general. Several interesting topics not covered in the standard high school curriculum are introduced in this text.
                        Image credit
                        edit blurb

                        Geology montage.png
                        Historical geology is a subset of geology which aims at a reconstruction of the history of the Earth.
                        Image credit
                        edit blurb

                        Diagram of the human heart (cropped).svg
                        Human Physiology explains, system by system, the workings of your body. It is intended as an understandable undergraduate-level guide to how the body systems function at a cellular level and how they work together to maintain a favorable environment for your cells. You and your class are invited to use and improve this book!
                        Image credit
                        edit blurb

                        Linalg triangle formed by two vectors.png
                        Linear algebra is about solving systems of linear equations. The Linear Algebra book helps students master a standard undergraduate linear algebra course — Gaussian reduction, vector spaces, linear maps, determinants, and eigenvalues and eigenvectors — using a developmental approach in which results are proved rather than merely presented.
                        Image credit
                        edit blurb

                        Cordonnees spheriques.png
                        The Physics Study Guide is meant as a supplement to a year-long freshman-level physics course with a trigonometry prerequisite.
                        Image credit
                        edit blurb

                        SDS-PAGE Coomasie stained.jpg
                        Proteomics is the study of the proteome, the set of proteins expressed in a certain cell at a specified time given specific conditions. In order to fully understand proteomics, one must first understand what proteins are. A protein is a macromolecule that consists of a long chain of amino acids.
                        Image credit
                        edit blurb

                        Radiation-oncology.jpg
                        Radiation Oncology is a concise review of the radiation oncology field including a review of pertinent literature. Designed as a primer for students of radiation oncology, but may also be useful for those in practice to review areas of interest.
                        Image credit

                        Javad alizadeh joking-on--amazing-formula.jpg
                        Special Relativity is an introductory text for physics undergraduates and advanced high school students. It is also approachable by the educated layman. It is carefully designed to tackle the physics of simultaneity.
                        Image credit
                        edit blurb

                        Rutherford atom.svg
                        This Quantum World is an introduction to the subject of quantum mechanics, following the historical development of the theory. Physics and mathematics required, not for the faint of heart.
                        Image credit
                        edit blurb

                        Computing
                        Visit Department:Computing to find even more.
                        Ada Mascot Wikibook.svg
                        Ada Programming is a tutorial teaching the Ada programming language. Ada puts unique emphasis on, and provides strong support for, good software engineering practices that scale well to very large software systems (millions of lines of code, and very large development teams).
                        Image credit
                        edit blurb

                        Algorithms-Asymptotic-ExamplePlot1.png
                        The Algorithms book aims to be an accessible introduction into the design and analysis of efficient algorithms.
                        Image credit
                        edit blurb

                        Blender noob to pro cover image.jpg
                        Blender 3D is a cross-platform, open source 3D modeling and animation package. It can be used to create photo-realistic images, animated films, CGI special effects and computer games. This book provides an excellent collection of tutorials to help you learn to model, render, rig, animate, and create with Blender 3D. You will be turned from a newbie to a pro in minutes!
                        Image credit
                        edit blurb

                        Cimage.jpg
                        C Programming is a tutorial teaching the C programming language. C is the most commonly used programming language for writing operating systems. Not only is C the language of operating systems, it is the precursor and inspiration for almost all of the most popular high-level languages available today. In fact, Perl, PHP, and Python are all written in C.
                        Image credit
                        edit blurb

                        C sharp.svg
                        The C# Programming Language is an object-oriented programming language developed by Microsoft as part of the .NET initiative. This book will discuss and explain this powerful language.
                        Image credit
                        edit blurb

                        Haskell-Logo-Variation.png
                        Haskell is a lazy functional programming language with a state of the art type system. This tutorial aims to be friendly enough for new programmers, yet deep enough to challenge the most experienced.
                        Image credit
                        edit blurb

                        2018 Komputer PC 04.jpg
                        A desktop PC is a complicated piece of electrical equipment, and constructing one from parts is no small feat. Learn How To Assemble A Desktop PC with this informative wikibook.
                        Image credit
                        edit blurb

                        KL Intel i386DX.jpg
                        Ever wonder what the relationship was between the C programming language, Assembly Language, and machine code on the x86 family of microprocessors? Learn the art of disassembly and reverse engineering on the x86 platform with the x86 Disassembly wikibook!
                        Image credit
                        edit blurb

                        Knoppix DVD unterschrift.jpg
                        Knoppix is a Linux distribution that runs completely from a CD or DVD. There is no need for installation—it bypasses installed software and automatically detects hardware.
                        Image credit
                        edit blurb

                        LaTeX cover.svg
                        LaTeX is one of the best languages for marking up technical documents to provide a quality publication.
                        Image credit
                        edit blurb

                        Python.svg
                        Python is a modern programming language, powerful yet easy to learn. This tutorial book targets at people who have never programmed before. It provides both an introduction to Python and to computer programming in general.
                        Image credit
                        edit blurb

                        SSH-sequence-password.svg
                        The OpenSSH suite provides secure remote access and file transfer. With the book OpenSSH you can learn how to use the OpenSSH client, server, and key utilities, allowing you to benefit from their extensive capabilities.
                        Image credit
                        edit blurb

                        Python-logo-notext.svg
                        This book provides a concise introduction to Python 3.
                        Image credit
                        edit blurb

                        Small Flag of the United Nations ZP.svg
                        This collection of e-primers, on the subjects of Free Open Source Software and Information and Communications Technology has been donated to Wikibooks by the UNDP-APDIP.
                        Image credit
                        edit blurb

                        Haskell-logo.png
                        In this advanced Haskell tutorial we'll implement a significant subset of Scheme. We assume no prior Haskell knowledge, but progress quickly. If you're feeling ambitious, why not Write Yourself a Scheme in 48 Hours?
                        Image credit
                        edit blurb

                        XForms-cover.jpg
                        XForms is the world-wide-web standard for building feature-rich web applications without requiring any knowledge of JavaScript. The XForms wikibook provides an in-depth tutorial and cookbook-style examples of over 90 working XForms applications.
                        Image credit
                        edit blurb

                        Xml book cover wiki.png
                        eXtensible Markup Language (XML) is a widely-used computer language for creating and designing pages on the web and for defining other languages with more specialized purposes. XML - Managing Data Exchange provides a detailed description of XML, its origins, its programming, and its uses on the Internet today.
                        Image credit
                        edit blurb

                        Miscellaneous and recreational activities
                        Visit Department:Miscellaneous or Department:Recreational activities to find even more.
                        Arimaa.JPG
                        Arimaa is a two-player 8-by-8 board game with simple rules, but a very large selection of moves. Most Arimaa positions defy precise calculation, and the game's creator hoped it would prove easier for humans than for computers. In 2015, however, a bot defeated three top human players, winning the Arimaa Challenge.
                        Image credit
                        edit blurb

                        Nuvola apps edu miscellaneous (no words).svg
                        Blended learning is combining the best of face to face and Web-based technology (e.g., online discussions, self-paced instruction, collaborative learning, streaming video, audio, and text) to accomplish an educational goal.
                        Image credit
                        edit blurb

                        ChessSet.jpg
                        Chess is an ancient strategy game for two players. In this book, not only will you learn to play chess, but you will also master it. This book is great for beginners, but also for anyone else interested in chess - even a chess master.
                        Image credit
                        edit blurb

                        Athletics pictogram.svg
                        Coaching Youth Middle Distance Runners is a book for coaches who train athletes aged between 6 and 18 years old to participate in running events between 800 and 5,000 m. Topics discussed include nutritional concerns, psychological considerations, effective training methods, and competition strategies. Special attention is given to potential differences between genders. An appendix includes selections for further reading.
                        Image credit
                        edit blurb

                        Open book 01.svg
                        Using Wikibooks is your guidebook to navigating the roles and uses of Wikibooks. From becoming a reader, to contributing as a writer, and beyond, each chapter aims to explore its many aspects, and to provide the pertinent information to know for getting the most out of your journey.
                        Image credit
                        edit blurb

                        Wikijunior
                        Visit the Wikijunior page to see all the books available for children from birth to age 12.
                        TransMilenio Estacion A Caracas.svg
                        Children can explore all the letters of the alphabet in Alphabet.
                        Image credit
                        edit blurb


                        Wikijunior Animal Alphabet.jpg
                        Children can explore all the wild letters with their animal pals in Animal Alphabet.
                        Image credit
                        edit blurb


                        Wikijunior bigcats frontpag.jpg
                        Wild cats are some of Earth's grandest treasures, and their stories excite the imagination of kids of all ages. Big Cats helps to explore this fascinating family.
                        Image credit
                        edit blurb


                        Megakaryocyte1.svg
                        Biology is about all living things, like animals, trees, and other plants.
                        Image credit
                        edit blurb

                        Europe location.png
                        Young readers can have fun learning about Europe at Wikijunior:Europe. Europe has over 700 million people, and over 40 countries.
                        Image credit
                        edit blurb

                        Tomato je.jpg
                        In Food Alphabet children get an introduction to the different types of foods that they may or may not be familiar with so that they can become familiar with the letters of the alphabet.
                        Image credit
                        edit blurb


                        Lateral head anatomy detail.png
                        Explore and discover the human body, an incredible machine, with Human Body. For children ages 8–12.
                        Image credit
                        edit blurb


                        King Henry I of England.jpg
                        Kings and Queens of England takes a look at the various people and families that have held the crown and presents it in a manner appropriate for young people.
                        Image credit
                        edit blurb

                        Languages Graphic.png
                        Kids can explore the history and construction of the world's most spoken languages with Languages.
                        Image credit
                        edit blurb


                        Media Player Classic MPC No Shadow With Numbers.png
                        Small Numbers helps children count to ten and learn the meaning of numbers by pointing out real-life situations in which they play a role.
                        Image credit
                        edit blurb


                        The Earth seen from Apollo 17.jpg
                        Outer space is the final frontier for humans. Even though the rest of the solar system objects may seem like tiny dots from Earth, our celestial neighbors are still important to learn about, because they aren't really just dots. Solar System presents this material in a manner inviting to young astronomers everywhere.
                        Image credit
                        edit blurb


                        World at Work Cover.png
                        In World at Work children can explore various jobs around the world, including a rickshaw driver from Bangladesh and a waitress from the United States of America. For ages 4–7.
                        Image credit
                        edit blurb

                        Featured books
                        Acoustics (PDF) — Ada Programming (PDF) — Algorithms (PDF) — Anatomy and Physiology of Animals (PDF) — Applications of ICT in Libraries (PDF) — Arimaa — A-level Computing/AQA — Basic Physics of Nuclear Medicine (PDF) — Blended Learning in K-12 — Blender 3D: Noob to Pro — C Programming (PDF) — Chess (PDF) — Coaching Youth Middle Distance Runners (PDF) — Cognitive Psychology and Cognitive Neuroscience (PDF) — Communication Theory (PDF) — Consciousness Studies (PDF) — Control Systems (PDF) — C# Programming (PDF) — Elements of Political Communication — Engineering Acoustics (PDF) — European History (PDF) — First Aid (PDF) — Formal Logic (PDF) — Fundamentals of Transportation (PDF) — Guitar (PDF) — Haskell (PDF) — High School Mathematics Extensions (PDF) — Historical Geology — How To Assemble A Desktop PC (PDF) — Human Physiology (PDF) — Introduction to Paleoanthropology (PDF) — Introduction to Sociology — Knowing Knoppix — Latin (PDF) — LaTeX (PDF) — Learning Theories (PDF) — Linear Algebra — Lucid Dreaming (PDF) — Managing Groups and Teams (PDF) — Miskito — Muggles' Guide to Harry Potter (PDF) — New Zealand History (PDF) — Non-Programmer's Tutorial for Python 2.6 (PDF) — Non-Programmer's Tutorial for Python 3 (PDF) — OpenSSH (PDF) — Physics Study Guide — Proteomics — Radiation Oncology — Social and Cultural Foundations of American Education — Spanish (PDF) — Special Relativity (PDF) — Stuttering (PDF) — This Quantum World (PDF) — UK Constitution and Government (PDF) — UNDP-APDIP Books — Using Wikibooks (PDF) — Wikijunior:Alphabet — Wikijunior:Animal Alphabet — Wikijunior:Big Cats (PDF) — Wikijunior:Biology (PDF) — Wikijunior:Europe — Wikijunior:Food Alphabet — Wikijunior:Human Body — Wikijunior:Languages (PDF) — Wikijunior:Kings and Queens of England (PDF) — Wikijunior:Small Numbers — Wikijunior:Solar System (PDF) — Wikijunior:World at Work — Write Yourself a Scheme in 48 Hours (PDF) — x86 Disassembly (PDF) — XForms — XML - Managing Data Exchange — Zine Making


                        Recognized good books from previous discontinued efforts.
                        Navigation menu
                        Not logged in
                        Discussion for this IP address
                        Contributions
                        Create account
                        Log in
                        Project pageDiscussion
                        ReadView sourceView history
                        Search Wikibooks
                        Main Page
                        Help
                        Browse
                        Cookbook
                        Wikijunior
                        Featured books
                        Recent changes
                        Donations
                        Random book
                        Using Wikibooks
                        Community
                        Reading room forum
                        Community portal
                        Bulletin Board
                        Help out!
                        Policies and guidelines
                        Contact us
                        Tools
                        What links here
                        Related changes
                        Upload file
                        Special pages
                        Permanent link
                        Page information
                        Wikidata item
                        Sister projects
                        Wikipedia
                        Wikiversity
                        Wiktionary
                        Wikiquote
                        Wikisource
                        Wikinews
                        Wikivoyage
                        Commons
                        Wikidata
                        MediaWiki
                        Meta-Wiki
                        Print/export
                        Create a collection
                        Download as PDF
                        Printable version
                        In other projects
                        Meta-Wiki
                        Wikispecies
                        Wikidata
                        Wikinews
                        Wikipedia
                        Wikiquote
                        Wikisource
                        Wikiversity
                        Wikivoyage

                        In other languages
                        العربية
                        বাংলা
                        Deutsch
                        Español
                        Français
                        Português
                        Русский
                        4 more
                        Edit links
                        This page was last edited on 18 October 2021, at 17:51.
                        Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy.
                        Privacy policyAbout WikibooksDisclaimersMobile viewDevelopersStatisticsCookie statementWikimedia FoundationPowered by MediaWiki
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyScrollShowContent;