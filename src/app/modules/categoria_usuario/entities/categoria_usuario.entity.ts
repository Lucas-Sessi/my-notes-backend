import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/model/entities/user.entity';
import { CategoriaInvestimento } from '../../categoria_investimento/entities/categoria_investimento.entity';
@Entity('categoria_usuario')
export class CategoriaUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: false })
  id_usuario: number;

  @Column({ type: 'integer', nullable: false })
  id_categoria: number;

  @Column({ type: 'integer', nullable: false })
  percent_ideal_cateira: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_criacao: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_atualizacao: Date;
}
